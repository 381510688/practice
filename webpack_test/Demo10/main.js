/**
 * Created by ligang on 16/9/18.
 */
require.ensure(["./a"], function(require){
    var content = require("./a");
    document.open();
    document.write("<h1>" + content + "</h1>");
    document.close();
});