var gulp = require('gulp'),
   jshint = require('gulp-jshint'),
    apidoc = require('gulp-apidoc'),
    mocha = require('gulp-mocha'),
    jsdoc = require('gulp-jsdoc3');

/**
* Lint Checker
*/
gulp.task('lint', function () {
   gulp.src('./**/*.js')
      .pipe(jshint())
});

/**
* Run Mocha Tests
*/
gulp.task('mocha', function() {
   gulp.src('test/test.js', {read: false})
      .pipe(mocha({reporter: 'nyan'}))
});

/**
* Run documentation generator
*/
gulp.task('doc', function (cb) {
  var config = require('./jsdoc.json');
  gulp.src([], {read: false})
    .pipe(jsdoc(config, cb))
});

gulp.task('default', ['lint', 'mocha', 'doc']);
