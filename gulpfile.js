var gulp = require('ecc-gulp-tasks')(require('./buildConfig.js'));
var gulpSequence = require('gulp-sequence');

var fs = require('fs');
var path = require('path');
var _ = require('lodash');


var visp = require('./lib/vis/package.json');

var iconFontVersion = '3.0.1';
var robotoFontVersion = 'v1.1.0';
var visVersion = visp.version;

gulp.task('default', ['debug']);

gulp.task('full-build', gulpSequence(['vis', 'build-sass'], 'update-licenses', 'build'));

gulp.task('full-test', ['test', 'sass-compile']);

gulp.task('build-sass', ['sass-compile', 'sass-assets']);

gulp.task('download-fonts', ['download-iconfont', 'download-roboto', 'icontable']);

gulp.task('update-licenses', function(cb) {
    const yaml = require('js-yaml');

    const licenseFile = path.join(__dirname, 'additionalLicenses.yml');

    try {
        let doc = fs.readFileSync(licenseFile, 'utf8');

        dependencies = _.forEach(yaml.safeLoad(doc)['ecc-gui-elements']['dependencies'], (dependency) => {

            const oldVersion = new RegExp(_.toString(dependency.version).replace(/\./g, '\\.'), 'g');

            if (dependency.name === 'vis') {
                doc = doc.replace(oldVersion, visVersion)
            } else if (dependency.name === 'material-design-icons') {
                doc = doc.replace(oldVersion, iconFontVersion)
            }

        });

        fs.writeFile(licenseFile, doc, cb)

    } catch (e) {
        cb(e);
    }
});

gulp.task('download-iconfont', function() {
    var download = require('gulp-download-stream');

    return download([
        `https://github.com/google/material-design-icons/raw/${iconFontVersion}/iconfont/MaterialIcons-Regular.eot`,
        `https://github.com/google/material-design-icons/raw/${iconFontVersion}/iconfont/MaterialIcons-Regular.ttf`,
        `https://github.com/google/material-design-icons/raw/${iconFontVersion}/iconfont/MaterialIcons-Regular.woff`,
        `https://github.com/google/material-design-icons/raw/${iconFontVersion}/iconfont/MaterialIcons-Regular.woff2`,
    ]).pipe(gulp.dest('./dist/fonts/iconfont'));
});

gulp.task('download-roboto', function() {
    var download = require('gulp-download-stream');
    var rename = require("gulp-rename");

    return download([
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Black/Roboto-Black.ttf`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Black/Roboto-Black.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Black/Roboto-Black.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/BlackItalic/Roboto-BlackItalic.ttf`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/BlackItalic/Roboto-BlackItalic.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/BlackItalic/Roboto-BlackItalic.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Bold/Roboto-Bold.ttf`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Bold/Roboto-Bold.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Bold/Roboto-Bold.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/BoldItalic/Roboto-BoldItalic.ttf`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/BoldItalic/Roboto-BoldItalic.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/BoldItalic/Roboto-BoldItalic.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Italic/Roboto-Italic.ttf`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Italic/Roboto-Italic.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Italic/Roboto-Italic.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Light/Roboto-Light.ttf`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Light/Roboto-Light.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Light/Roboto-Light.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/LightItalic/Roboto-LightItalic.ttf`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/LightItalic/Roboto-LightItalic.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/LightItalic/Roboto-LightItalic.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Medium/Roboto-Medium.ttf`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Medium/Roboto-Medium.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Medium/Roboto-Medium.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/MediumItalic/Roboto-MediumItalic.ttf`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/MediumItalic/Roboto-MediumItalic.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/MediumItalic/Roboto-MediumItalic.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Regular/Roboto-Regular.ttf`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Regular/Roboto-Regular.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Regular/Roboto-Regular.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Thin/Roboto-Thin.ttf`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Thin/Roboto-Thin.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Thin/Roboto-Thin.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/ThinItalic/Roboto-ThinItalic.ttf`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/ThinItalic/Roboto-ThinItalic.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/ThinItalic/Roboto-ThinItalic.woff2`,
    ])
        .pipe(rename(function(paths) {
            paths.dirname += '/'
            paths.dirname += paths.basename.replace(/Roboto-/, '')
        }))
        .pipe(gulp.dest('./dist/fonts/roboto'));
});

gulp.task('sass-assets', function() {
    return gulp.src('node_modules/material-design-lite/src/images/*')
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('sass-compile', function(cb) {
    var sass = require('node-sass');
    sass.render({
        file: './style/core/main.build-css.scss',
        importer: function importer(url, prev, done) {
            if (url[0] === '~') {
                url = path.resolve(path.join(__dirname, 'node_modules'), url.substr(1));
            }

            return {file: url};
        }
    }, function(err, res) {
        if (err) {
            cb(err);
            return;
        }

        fs.writeFile('./dist/style-core.css', res.css, cb);

    });
});


gulp.task('vis', function(cb) {
    var p = require('./package.json');

    console.log('The vis dependency is not managed normally, but as a submodule.')
    console.log('Please forward the submodule if you want to make updates');

    p.dependencies = _.mapValues(p.dependencies, (value, key) => {

        if (_.includes(_.keys(visp.devDependencies), key)) {
            return visp.devDependencies[key];
        }

        if (_.includes(_.keys(visp.dependencies), key)) {
            return visp.dependencies[key];
        }

        return value;
    });

    // rewrite package.json (with newline in the end)
    fs.writeFile('./package.json', JSON.stringify(p, null, 2) + '\n', cb);
});

gulp.task('download-codepoints', function() {
    var download = require('gulp-download-stream');

    return download([
        `https://github.com/google/material-design-icons/raw/${iconFontVersion}/iconfont/codepoints`,
    ]).pipe(gulp.dest('./dist/fonts/iconfont'));
});

gulp.task('icontable', ['download-codepoints'], function(cb) {

    fs.readFile('./dist/fonts/iconfont/codepoints', 'utf8', function(err, data) {

        if (err) {
            cb(err);
            return;
        }

        var result = {};

        data.split('\n').forEach(function(line) {
            if (/^\s*$/.test(line)) {
                return;
            }
            var split = line.split(' ');

            result[split[0]] = split[1];

        });

        fs.writeFile('./src/elements/Icon/icontable.json', JSON.stringify(result, null, 2) + '\n', cb);
    });

});
