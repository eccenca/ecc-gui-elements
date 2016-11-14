var gulp = require('ecc-gulp-tasks')(require('./buildConfig.js'));
var gulpSequence = require('gulp-sequence');

gulp.task('default', ['debug', 'serve']);

gulp.task('full-build', gulpSequence(['vis', 'icontable'], 'build', 'copy-style-core'));

gulp.task('full-test', ['test', 'test-core-sass']);

gulp.task('test-core-sass', function(cb) {
    var path = require('path');
    var sass = require('node-sass');
    sass.render({
        file: './style/core/main.scss',
        importer: function importer(url, prev, done) {
            if (url[0] === '~') {
                url = path.resolve(path.join(__dirname, 'node_modules'), url.substr(1));
            }

            return {file: url};
        }
    }, cb);
});

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

gulp.task('icontable', function(cb) {

    var fs = require('fs');

    fs.readFile('./node_modules/material-design-icons/iconfont/codepoints', 'utf8', function(err, data) {

        if (err) {
            cb(err);
        }

        var result = {};

        data.split('\n').forEach(function(line) {
            if (/^\s*$/.test(line)) {
                return;
            }
            var split = line.split(' ');

            result[split[0]] = split[1];

        });

        fs.writeFile('./icontable.json', JSON.stringify(result, null, 2) + '\n', cb);
    });

});

gulp.task('copy-style-core', function(){
    return gulp.src('./style/style-core.js')
        .pipe(gulp.dest('./es5'));
});
