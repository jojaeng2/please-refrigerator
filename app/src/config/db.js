const mysql = require("mysql");

const db = mysql.createPool({ //수정예정
    host: process.env.DB_HOST, //db 주소
    port: process.env.DB_PORT, //db 포트
    user: process.env.DB_USER, //db 유저이름
    password: process.env.DB_PASSWORD, //db 패스워드
    database: process.env.DB_DATABASE, //db 스키마
});

module.exports = db;