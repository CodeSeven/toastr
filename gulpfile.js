/* jshint node:true, camelcase:false */
var gulp = require('gulp');
var del = require('del');
var glob = require('glob');
var karma = require('karma').server;
var merge = require('merge-stream');
var plato = require('plato');
var plug = require('gulp-load-plugins')();

var paths = {
    js: './toastr.js',
    css: './toastr.css',
    report: './report',
    build: './build'
};

var colors = plug.util.colors;
var log = plug.util.log;

/**
 * List the available gulp tasks
 */
gulp.task('help', plug.taskListing);

/**
 * Lint the code, create coverage report, and a visualizer
 * @return {Stream}
 */
gulp.task('analyze', function() {
    log('Analyzing source with JSHint, JSCS, and Plato');

    var jshint = analyzejshint([paths.js]);
    var jscs = analyzejscs([paths.js]);

    startPlatoVisualizer();

    return merge(jshint, jscs);
});

/**
 * Minify and bundle the app's JavaScript
 * @return {Stream}
 */
gulp.task('js', function() {
    log('Bundling, minifying, and copying the app\'s JavaScript');

    return gulp
        .src(paths.js)
//        .pipe(plug.sourcemaps.init())
        .pipe(plug.bytediff.start())
        .pipe(plug.uglify({}))
        .pipe(plug.bytediff.stop(bytediffFormatter))
//        .pipe(plug.sourcemaps.write(paths.build))
        .pipe(plug.rename('toastr.min.js'))
        .pipe(gulp.dest(paths.build));
});

/**
 * Minify and bundle the CSS
 * @return {Stream}
 */
gulp.task('css', function() {
    log('Bundling, minifying, and copying the app\'s CSS');

    return gulp.src(paths.css)
//        .pipe(plug.autoprefixer('last 2 version', '> 5%'))
        .pipe(plug.bytediff.start())
        .pipe(plug.minifyCss({}))
        .pipe(plug.bytediff.stop(bytediffFormatter))
        .pipe(plug.rename('toastr.min.css'))
        .pipe(gulp.dest(paths.build));
});

/**
 * Build js and css
 */
gulp.task('default', ['js', 'css'], function() {
    log('Analyze, Build CSS and JS');
});

/**
 * Remove all files from the build folder
 * One way to run clean before all tasks is to run
 * from the cmd line: gulp clean && gulp build
 * @return {Stream}
 */
gulp.task('clean', function(cb) {
    log('Cleaning: ' + plug.util.colors.blue(paths.report));
    log('Cleaning: ' + plug.util.colors.blue(paths.build));

    var delPaths = [paths.build, paths.report];
    del(delPaths, cb);
});

/**
 * Run specs once and exit
 * To start servers and run midway specs as well:
 *    gulp test --startServers
 * @return {Stream}
 */
gulp.task('test', function(done) {
    startTests(true /*singleRun*/ , done);
});

////////////////

/**
 * Execute JSHint on given source files
 * @param  {Array} sources
 * @param  {String} overrideRcFile
 * @return {Stream}
 */
function analyzejshint(sources, overrideRcFile) {
    var jshintrcFile = overrideRcFile || './.jshintrc';
    log('Running JSHint');
    return gulp
        .src(sources)
        .pipe(plug.jshint(jshintrcFile))
        .pipe(plug.jshint.reporter('jshint-stylish'));
}

/**
 * Execute JSCS on given source files
 * @param  {Array} sources
 * @return {Stream}
 */
function analyzejscs(sources) {
    log('Running JSCS');
    return gulp
        .src(sources)
        .pipe(plug.jscs('./.jscsrc'));
}

/**
 * Start Plato inspector and visualizer
 */
function startPlatoVisualizer() {
    log('Running Plato');

    var files = glob.sync('toastr.js');

    var options = {
        title: 'Plato Inspections Report'
    };
    var outputDir = './report/plato';

    plato.inspect(files, outputDir, options, platoCompleted);

    function platoCompleted(report) {
        var overview = plato.getOverviewReport(report);
        log(overview.summary);
    }
}

/**
 * Start the tests using karma.
 * @param  {boolean} singleRun - True means run once and end (CI), or keep running (dev)
 * @param  {Function} done - Callback to fire when karma is done
 * @return {undefined}
 */
function startTests(singleRun, done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: !!singleRun
    }, karmaCompleted);

    ////////////////

    function karmaCompleted() {
        done();
    }
}

/**
 * Formatter for bytediff to display the size changes after processing
 * @param  {Object} data - byte data
 * @return {String}      Difference in bytes, formatted
 */
function bytediffFormatter(data) {
    var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
    return data.fileName + ' went from ' +
        (data.startSize / 1000).toFixed(2) + ' kB to ' + (data.endSize / 1000).toFixed(2) + ' kB' +
        ' and is ' + formatPercent(1 - data.percent, 2) + '%' + difference;
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
