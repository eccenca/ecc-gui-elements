var gulp = require('./gulp')([
    'build',
    'watch',
]);

gulp.task('default', ['build', 'watch']);
