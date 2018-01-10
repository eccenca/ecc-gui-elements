/* eslint global-require: 0 */

const gulp = require('@eccenca/gulp-tasks')(require('./buildConfig.js'));

gulp.task('default', ['debug']);

const gulpSequence = require('gulp-sequence');

const fs = require('fs-extra');
const path = require('path');
const _ = require('lodash');

const iconFontVersion = '3.0.1';
const robotoFontVersion = 'v1.1.0';

gulp.task(
    'full-build',
    gulpSequence('download-fonts', 'build-sass', 'update-licenses', 'build')
);

gulp.task('full-test', ['sass-compile']);

gulp.task('build-sass', ['sass-compile', 'sass-assets']);

gulp.task(
    'download-fonts',
    ['download-iconfont', 'download-roboto', 'icontable'],
    cb => {
        fs.writeFile(
            '.cached-fonts',
            `${iconFontVersion}|${robotoFontVersion}`,
            cb
        );
    }
);

gulp.task('update-licenses', cb => {
    const yaml = require('js-yaml');

    const licenseFile = path.join(__dirname, 'additionalLicenses.yml');

    try {
        let doc = fs.readFileSync(licenseFile, 'utf8');

        _.forEach(
            yaml.safeLoad(doc)['ecc-gui-elements'].dependencies,
            dependency => {
                const oldVersion = new RegExp(
                    _.toString(dependency.version).replace(/\./g, '\\.'),
                    'g'
                );

                if (dependency.name === 'material-design-icons') {
                    doc = doc.replace(oldVersion, iconFontVersion);
                }
            }
        );

        fs.writeFile(licenseFile, doc, cb);
    } catch (e) {
        cb(e);
    }
});

let fontStatus = null;

const areFontsUpToDate = () => {
    if (fontStatus !== null) {
        return fontStatus;
    }

    try {
        const cachedFonts = fs.readFileSync('.cached-fonts');
        if (
            cachedFonts.toString() === `${iconFontVersion}|${robotoFontVersion}`
        ) {
            fontStatus = true;
            return fontStatus;
        }
    } catch (e) {}
    fontStatus = false;
    return fontStatus;
};

gulp.task('download-iconfont', () => {
    if (areFontsUpToDate()) {
        console.warn(`Fonts are up to date, no need to download`);
        return true;
    }
    const download = require('gulp-download-stream');

    fs.removeSync('./dist/fonts/iconfont');

    return download([
        `https://github.com/google/material-design-icons/raw/${iconFontVersion}/iconfont/MaterialIcons-Regular.woff`,
        `https://github.com/google/material-design-icons/raw/${iconFontVersion}/iconfont/MaterialIcons-Regular.woff2`,
    ]).pipe(gulp.dest('./dist/fonts/iconfont'));
});

gulp.task('download-roboto', () => {
    if (areFontsUpToDate()) {
        console.warn(`Fonts are up to date, no need to download`);
        return true;
    }
    const download = require('gulp-download-stream');
    const rename = require('gulp-rename');

    fs.removeSync('./dist/fonts/roboto');

    return download([
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Black/Roboto-Black.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Black/Roboto-Black.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/BlackItalic/Roboto-BlackItalic.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/BlackItalic/Roboto-BlackItalic.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Bold/Roboto-Bold.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Bold/Roboto-Bold.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/BoldItalic/Roboto-BoldItalic.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/BoldItalic/Roboto-BoldItalic.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Italic/Roboto-Italic.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Italic/Roboto-Italic.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Light/Roboto-Light.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Light/Roboto-Light.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/LightItalic/Roboto-LightItalic.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/LightItalic/Roboto-LightItalic.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Medium/Roboto-Medium.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Medium/Roboto-Medium.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/MediumItalic/Roboto-MediumItalic.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/MediumItalic/Roboto-MediumItalic.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Regular/Roboto-Regular.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Regular/Roboto-Regular.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Thin/Roboto-Thin.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/Thin/Roboto-Thin.woff2`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/ThinItalic/Roboto-ThinItalic.woff`,
        `https://github.com/FontFaceKit/roboto/raw/${robotoFontVersion}/fonts/ThinItalic/Roboto-ThinItalic.woff2`,
    ])
        .pipe(
            rename(paths => {
                const newPaths = paths;
                newPaths.dirname += '/';
                newPaths.dirname += newPaths.basename.replace(/Roboto-/, '');
                return newPaths;
            })
        )
        .pipe(gulp.dest('./dist/fonts/roboto'));
});

gulp.task('sass-assets', () =>
    gulp
        .src('node_modules/@eccenca/material-design-lite/src/images/*')
        .pipe(gulp.dest('./dist/images'))
);

gulp.task('sass-compile', cb => {
    const sass = require('node-sass');
    sass.render(
        {
            file: './src/scss/main.build-css.scss',
            importer: url => {
                if (url[0] === '~') {
                    return {
                        file: path.resolve(
                            path.join(__dirname, 'node_modules'),
                            url.substr(1)
                        ),
                    };
                }

                return {file: url};
            },
        },
        (err, res) => {
            if (err) {
                cb(err);
                return;
            }

            fs.writeFile('./dist/style-core.css', res.css, cb);
        }
    );
});

gulp.task('download-codepoints', ['download-iconfont'], () => {
    if (areFontsUpToDate()) {
        console.warn(`Fonts are up to date, no need to download`);
        return true;
    }
    const download = require('gulp-download-stream');

    return download([
        `https://github.com/google/material-design-icons/raw/${iconFontVersion}/iconfont/codepoints`,
    ]).pipe(gulp.dest('./dist/fonts/iconfont'));
});

gulp.task('icontable', ['download-codepoints'], cb => {
    fs.readFile('./dist/fonts/iconfont/codepoints', 'utf8', (err, data) => {
        if (err) {
            cb(err);
            return;
        }

        const result = {};

        data.split('\n').forEach(line => {
            if (/^\s*$/.test(line)) {
                return;
            }
            const split = line.split(' ');

            result[split[0]] = split[1];
        });

        fs.writeFile(
            './src/elements/Icon/icontable.json',
            `${JSON.stringify(result, null, 2)}\n`,
            cb
        );
    });
});
