#!/usr/bin/env node --harmony
/**
 * https://github.com/tj/commander
 * https://www.npmjs.com/package/commander
 * https://developer.atlassian.com/blog/2015/11/scripting-with-node/#packaging-shell-commands
 * @type {Command}
 */
var co = require('co');
var prompt = require('co-prompt');
var program = require('commander');

// program
//     .version('0.0.1')
//     .arguments('<file>')
//     .option('-u, --username <username>', 'The user to authenticate as')
//     .option('-p, --password <password>', 'The user\'s password')
//     .action(function (file) {
//         console.log('user: %s pass: %s file: %s',
//             program.username, program.password, file);
//     })
//     .parse(process.argv);


program
    .version('0.0.2')
    .arguments('<file>')
    .option('-u, --username <username>', 'The user to authenticate as')
    .option('-p, --paswword <password>', 'The user\'s password')
    .action(function(file){
        co(function *(){
            var username = yield prompt('username: ');
            var password = yield prompt.password('password: ');
            console.log('user: %s, pass: %s, file: %s',
                username, password, file);
        });
    })
    .parse(process.argv);
