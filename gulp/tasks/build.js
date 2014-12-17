/* jshint node:true */
var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = function() {
    return gulp.src('./src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
};
