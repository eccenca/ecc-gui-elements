/* jshint node:true */
var gulp = require('gulp');

module.exports = function() {
    gulp.watch(['./src/**/*'], ['build']);
};
