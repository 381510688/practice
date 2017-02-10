var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var ngResource = require("./routes/ngResource");

var app = express();

// 配置, 后台渲染的模板引擎
app.set('views', path.join(__dirname, "../public"));
app.set('view engine', 'ejs');

app.use(bodyParser.json());                           // 配置, 解析识别application/json格式提交的post
app.use(bodyParser.urlencoded({extended: false}));    // 配置, 解析识别application/x-www-form-urlencoded格式(常规表单)提交的post
app.use(bodyParser.text({type: 'text/plain'}));       // 配置, 识别text/plain格式的提交put

app.use(express.static(path.join(__dirname, "../lib"))); // 配置, 静态资源

// 注意这里是get不是use
// app.use("/", function(){}); 所有请求都会被拦截
app.get("/", function(req, res, next){
    res.render('index', {title: 'NODE'});
});

// ngResource路由
app.use("/ngResource", ngResource);

app.listen(8888);