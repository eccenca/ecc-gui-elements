var gulp = require('ecc-gulp-tasks')(require('./buildConfig.js'));


gulp.task('vis', function(cb) {
    var _ = require('lodash');
    var fs = require('fs');
    var visp = require('./lib/vis/package.json');
    var p = require('./package.json');

    console.log('The vis dependency is not managed normally, but as a submodule.')
    console.log('Please forward the submodule if you want to make updates');

    p.dependencies = _.mapValues(p.dependencies, (value, key) => {

        if (_.includes(_.keys(visp.devDependencies), key)) {
            return visp.devDependencies[key];
        }

        if (key === 'vis') {
            return visp.version;
        }

        return value;
    });

    // rewrite package.json (with newline in the end)
    fs.writeFile('./package.json', JSON.stringify(p, null, 2) + "\n", cb);
});

gulp.task('default', ['debug', 'serve']);

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

// TODO: Move to new task
// gulp.task('default', ['sass', 'icontable']);
