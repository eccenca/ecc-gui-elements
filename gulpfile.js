var gulp = require('gulp');

gulp.task('default', function () {
    var path = require('path');
    var sass = require('gulp-sass');
    var rename = require("gulp-rename");

    var nodeModules = path.join(process.cwd(), 'node_modules')

    return gulp.src('./src/main.node.scss')
        .pipe(sass({
            importer : function(url, prev, done){

                if(url.indexOf('~') === 0){

                    url = path.join(nodeModules, url.substr(1));
                    console.log('Resolved file to: ' + url);

                }

                done({file: url})

            }
        }).on('error', sass.logError))
        .pipe(rename("main.css"))
        .pipe(gulp.dest('./dist'));
});
