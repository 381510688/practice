var fs = require("fs");
var path = require("path");
var Step = require("step"); // https://github.com/creationix/step

// 按顺序执行
Step(function readSelf() {
        fs.readFile(__filename, this);
    }, function capitalize(err, text) {
        if (err) throw err;
        return new Buffer(text).toString().toUpperCase();
    }, function showIt(err, newText) {
        if (err) throw err;
        console.log(newText);
    }
);

// 并发执行
Step(
    // Loads two files in parallel
    function loadStuff() {
        console.log(".."+__dirname)
        fs.readFile(__dirname + "/a.txt", 'UTF-8', this.parallel());
        fs.readFile(__dirname + "/b.txt", this.parallel());
    },
    // Show the result when done
    function showStuff(err, a, b) {
        if (err) throw err;
        console.log(a);
        console.log("=============");
        console.log(new Buffer(b).toString());
    }
);

// 动态
Step(
    function readDir() {
        fs.readdir(__dirname, this);
    },
    function readFiles(err, results) {
        if (err) throw err;
        // Create a new group
        var group = this.group();
        results.forEach(function (filename) {
            if (/\.js$/.test(filename)) {
                fs.readFile(__dirname + "/" + filename, 'utf8', group());
            }
        });
    },
    function showAll(err , files) {
        if (err) throw err;
        console.dir(files);
    }
);
