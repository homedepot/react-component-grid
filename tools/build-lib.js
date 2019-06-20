'use strict';

var rimraf = require('rimraf-promise');
var colors = require('colors');
var exec = require('child-process-promise').exec;

console.log('building lib'.green);

rimraf('./lib')
    .then(function (error) {
        let babelCli = 'babel --optional es7.objectRestSpread ./src/grid --out-dir ./lib/grid';
        return exec(babelCli).fail(function (error) {
            console.log(colors.red(error));
        });
    }).then(() => console.log('lib built'.green));
