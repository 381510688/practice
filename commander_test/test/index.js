#!/usr/bin/env node --harmony

/**
 * Created by ligang on 16/11/18.
 */

var co = require('co');
var prompt = require('co-prompt');
var program = require('commander');

var fs = require('fs');
var jsonfile = require('jsonfile');



var defaultConf = {
    name: process.env.PWD.split("/").pop(),
    version: "1.0.0",
    description: "",
    main: "index.js",
    directories: {
        "test": "test"
    },
    dependencies: {},
    devDependencies: {},
    scripts: {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    author: "",
    license: "ISC"
};

program
    .command('init')
    .description('run the given remote command')
    .action(function () {
        co(function*() {
            var params = {};
            params.name = yield prompt('name: (' +  process.env.PWD.split("/").pop() +')');
            params.version = yield prompt('version: (1.0.0)');
            params.description = yield prompt('description: ');
            params.repository = yield prompt('git repository: ');
            params.keywords = yield prompt('keywords: ');
            params.author = yield prompt('author: ');
            params.license = yield prompt('license: (ISC)');

            // 生成模板
            var result = fileTemplate(params);
            console.info(result);

            // 是否同意
            var agree = yield prompt('Is this ok? (yes)');
            if(agree != "no"){
                jsonfile.writeFileSync("package_test.json", result, {spaces: 2});
            }
            process.exit(0);
        });
    });
program.parse(process.argv);


function fileTemplate(params) {
    return Object.assign(defaultConf, params);
}