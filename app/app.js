"use strict";
// 모듈 import
const express = require("express"),
    dotenv = require("dotenv"),
    bodyParser = require("body-parser");

const app = express();
dotenv.config();



// URL을 통해 전달되는 데이터에 한글, 공백 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended:true }));


module.exports = app;