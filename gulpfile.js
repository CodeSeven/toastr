var gulp = require('gulp'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    closureCompiler = require('gulp-closure-compiler');

gulp.task('default', function(){
    return gulp.src('./src/toastr.es6')
        .pipe(sourcemaps.init())
            .pipe(babel({ blacklist: ['strict'] }))
            .pipe(rename('toastr.js'))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('dist', {overwrite: true}));
});

gulp.task('build', ['default', 'closure'], function () {

});


gulp.task('closure', function () {
    return gulp.src('./dist/toastr.js')
        .pipe(closureCompiler({
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
