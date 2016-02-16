var gulp = require('gulp');

gulp.task('sass', function () {
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

gulp.task('icontable', function () {

    //var csv = require('gulp-csvtojson');
    var rename = require('gulp-rename');

    /* TODO:
       Using insert and replace as workaround as long as gulp-csvtojson doesn't
       use recent csvtojson version that offers more options and callbacks.
    */
    var insert = require('gulp-insert');
    var replace = require('gulp-replace');

    return gulp.src('./dist/fonts/materialicons/codepoints')
        .pipe(
            replace(' ', '":"&#x')
        )
        .pipe(
            replace('\n', '","')
        )
        .pipe(
            insert.wrap('{"','"}')
        )
        .pipe(
            replace(',""}', '}')
        )
        /*
        .pipe(csv({
            constructResult: false,
            checkType: false,
            delimiter: ' ',
            noheader: true,
            headers:['ligatur','charcode'],
            trim: true,
        }))
        */
        .pipe(rename("icontable.json"))
        .pipe(gulp.dest('./dist/fonts/materialicons'));
});

gulp.task('default', ['sass', 'icontable']);
