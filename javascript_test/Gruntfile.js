'use strict';

module.exports = function(grunt){

    var config = {
        path: __dirname,
        src: __dirname + '/test/src',
        dest: __dirname + '/test/dest'
    };

    grunt.initConfig({
        config: config,
        pkg: grunt.file.readJSON('package.json'),

        replace: {
            requestAddress: {
                src: ['<%= config.src %>/1.html'],
                overwrite: true,
                replacements: [{
                    from: 'var requestAddress = "";',
                    to: 'var requestAddress = "http://blog.csdn.net/ligang2585116";'
                }]
            }
        },
        filerev: {
            options: {
                algorithm: 'md5',
                length: 8
            },
            js: {
                src: '<%= config.src %>/1.js'
            }
        },
        filerev_replace: {
            options: {
                assets_root: '<%= config.src %>/',
                views_root: '<%= config.src %>/'
            },
            js: {
                src: '<%= config.src %>/1.html'
            }
        }
    });

    /* 加载所有插件 */
    require('load-grunt-tasks')(grunt);
    /* 统计各个任务执行时间 */
    require('time-grunt')(grunt);


    grunt.registerInitTask("js-md5", "add md5 for js", ['filerev:js', 'filerev_replace:js']);

};