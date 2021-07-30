"use strict";
// 모듈 import
const cors = require('cors'),
    express = require("express"),
    dotenv = require("dotenv"),
    bodyParser = require("body-parser");

// 불러온 모듈 기본설정    
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

// 라우팅 파일 불러오기
const routing = require("./src/routes/home/router");


// URL을 통해 전달되는 데이터에 한글, 공백 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

// routing에 모든 post 정렬
app.use("/", routing);

module.exports = app;