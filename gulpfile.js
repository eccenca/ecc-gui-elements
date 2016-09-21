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
