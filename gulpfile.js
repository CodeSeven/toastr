var gulp = require("gulp"),
    babel = require("gulp-babel"),
    rename = require("gulp-rename"),
    sourcemaps = require('gulp-sourcemaps'),
    closureCompiler = require('gulp-closure-compiler'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs');

gulp.task('jshint', function() {
  return gulp.src('./src/*.es6')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jscs', function() {
  return gulp.src('./src/*.es6')
    .pipe(jscs());
});

gulp.task('transpile', function(){
    return gulp.src("./src/toastr.es6")
        .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(rename("toastr.js"))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest("dist", {overwrite: true}));
});

gulp.task('build', ['default','closure'], function () {

});

gulp.task('default', ['jshint', 'jscs', 'transpile']);


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
        .pipe(gulp.dest('dist'))
});
