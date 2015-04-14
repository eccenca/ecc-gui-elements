/* jshint node:true */
var gulp = require('gulp');
var less = require('gulp-less');

module.exports = function() {
    return gulp.src('./src/style.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
};
