const gulp = require('gulp');
const karma = require('karma').server;
const plug = require('gulp-load-plugins')();

const paths = {
  js: './toastr.js',
  less: './toastr.less',
  report: './report',
  build: './build'
};

const log = plug.util.log;

/**
 * Lint the code, create coverage report, and a visualizer
 * @return {Stream}
 */
gulp.task('eslint', function() {
  log('Analyzing source with ESLINT');
  const eslint = runEslint([paths.js]);
  return eslint;
});

/**
 * Minify and bundle the app's JavaScript
 * @return {Stream}
 */
gulp.task('js', function() {
  log('Bundling, minifying, and copying the app\'s JavaScript');

  return gulp
    .src(paths.js)
    .pipe(plug.sourcemaps.init())
    .pipe(plug.bytediff.start())
    .pipe(plug.terser({}))
    .pipe(plug.bytediff.stop(bytediffFormatter))
    .pipe(plug.sourcemaps.write('.'))
    .pipe(
      plug.rename(function(path) {
        if (path.extname === '.js') {
          path.basename += '.min';
        }
      })
    )
    .pipe(gulp.dest(paths.build));
});

/**
 * Minify and bundle the CSS
 * @return {Stream}
 */
gulp.task('css', function() {
  log('Bundling, minifying, and copying the app\'s CSS');

  return gulp
    .src(paths.less)
    .pipe(plug.less())
    .pipe(gulp.dest(paths.build))
    .pipe(plug.bytediff.start())
    .pipe(plug.minifyCss({}))
    .pipe(plug.bytediff.stop(bytediffFormatter))
    .pipe(plug.rename('toastr.min.css'))
    .pipe(gulp.dest(paths.build));
});

/**
 * Build js and css
 */
gulp.task('build', gulp.parallel('js', 'css'), function() {
  log('Lint, Build CSS and JS');
});

/**
 * Remove all files from the build folder
 * One way to run clean before all tasks is to run
 * from the cmd line: gulp clean && gulp build
 * @return {Stream}
 */
gulp.task('clean', function(cb) {
  log(`Cleaning: ${plug.util.colors.blue(paths.report)}`);
  log(`Cleaning: ${plug.util.colors.blue(paths.build)}`);

  const delPaths = [paths.build, paths.report];
  const del = require('del');
  del(delPaths).then(() => cb);
});

/**
 * Run specs once and exit
 * To start servers and run midway specs as well:
 *    gulp test --startServers
 * @return {Stream}
 */
gulp.task('test', function(done) {
  startTests(true /* singleRun*/, done);
});

// //////////////

/**
 * Execute ESLINT on given source files
 * @param {Array} sources Source files array
 * @return {Stream} Returns the stream
 */
function runEslint(sources) {
  log('Running eslint');
  return gulp
    .src(sources)
    .pipe(plug.eslint())
    .pipe(plug.eslint.format())
    .pipe(plug.eslint.failOnError());
}

/**
 * Start the tests using karma.
 * @param  {boolean} singleRun - True means run once and end (CI), or keep running (dev)
 * @param  {Function} done - Callback to fire when karma is done
 * @return {undefined}
 */
function startTests(singleRun, done) {
  karma.start(
    {
      configFile: `${__dirname}/karma.conf.js`,
      singleRun: Boolean(singleRun)
    },
    karmaCompleted
  );

  // //////////////

  function karmaCompleted(exitCode) {
    if (exitCode === 0) {
      done();
    } else {
      // eslint-disable-next-line no-process-exit
      process.exit(exitCode);
    }
  }
}

/**
 * Formatter for bytediff to display the size changes after processing
 * @param  {Object} data - byte data
 * @return {String}      Difference in bytes, formatted
 */
function bytediffFormatter(data) {
  const difference = data.savings > 0 ? ' smaller.' : ' larger.';
  return `${data.fileName} went from ${(data.startSize / 1000).toFixed(2)}  kB to ${(
    data.endSize / 1000
  ).toFixed(2)} kB and is ${formatPercent(1 - data.percent, 2)}% ${difference}`;
}

/**
 * Format a number as a percentage
 * @param  {Number} num       Number to format as a percent
 * @param  {Number} precision Precision of the decimal
 * @return {Number}           Formatted perentage
 */
function formatPercent(num, precision) {
  return (num * 100).toFixed(precision);
}
