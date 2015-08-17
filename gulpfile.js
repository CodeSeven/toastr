var gulp = require('gulp');
var $ = require('gulp-load-plugins')({ lazy: true });
var args = require('yargs').argv;
var config = require('./gulp.config')();

var colors = $.util.colors;

gulp.task('test', function () {
    log('Testing');

    return gulp.src(config.tests)
        .pipe($.mocha());
});

gulp.task('vet', function () {
    log('Linting');

    return gulp.src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', { verbose: true }))
        .pipe($.jshint.reporter('fail'))
        .pipe($.jscs());
});

gulp.task('build', ['vet', 'styles'], function () {
    log('Transpiling and Optimizing');

    return gulp.src(config.source + config.mainFile)
        .pipe($.sourcemaps.init())
        .pipe($.babel())
        .pipe($.uglify())
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest(config.build, { overwrite: true }));
});

gulp.task('styles', function() {
    log('Compiling Less --> CSS');

    return gulp
        .src(config.less)
        .pipe($.plumber()) // exit gracefully if something fails after this
        .pipe($.less())
        .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest(config.build));
});

gulp.task('default', ['build'], function () {
    // Also builds
});

//TODO: remove closure?
gulp.task('closure', function () {
    return gulp.src(config.build + config.mainFile)
        .pipe($.closureCompiler({
            compilerPath: 'bower_components/closure-compiler/compiler.jar',
            fileName: 'toastr.closure.min.js',
            compilerFlags: {
                compilation_level: 'ADVANCED_OPTIMIZATIONS',
                extra_annotation_name: 'jsx',
                // .call is super important, otherwise Closure Library will not work in strict mode.
                output_wrapper: '(function(){%output%}).call(window);',
                warning_level: 'VERBOSE'
            }
        }))
        .pipe(gulp.dest('dist'));
});

////////////////

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}
