var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var formModule = require('./modules/formMod');


var app = express();
app.use(cors());    // 允许跨域

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// form表单
app.use('/form', formModule);

app.listen(8888);