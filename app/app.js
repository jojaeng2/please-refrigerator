"use strict";
// 모듈 import
const express = require("express"),
    dotenv = require("dotenv"),
    bodyParser = require("body-parser");

// 불러온 모듈 기본설정    
const app = express();
dotenv.config();

// 라우팅 파일 불러오기
const routing = require("./src/routes/home/router");
app.use(express.static(`${__dirname}/src/public`));

// URL을 통해 전달되는 데이터에 한글, 공백 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended:true }));


app.use("/", routing);

module.exports = app;