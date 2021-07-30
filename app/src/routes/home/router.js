"use strict";

const express = require("express"),
    index_ctrl_router = require("./router.ctrl");


const router = express.Router();

// FE로 부터 POST 요청을 받아 router.ctrl.js 모듈에 들어있는 함수실행
router.post("/login", index_ctrl_router.index_supervise_user.login);
router.post("/register", index_ctrl_router.index_supervise_user.register);
router.post("/gettable", index_ctrl_router.index_supervise_user.test_table);


module.exports = router;