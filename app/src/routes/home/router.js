"use strict";

const express = require("express"),
    index_ctrl_router = require("./router.ctrl");


const router = express.Router();

// FE로 부터 POST 요청을 받아 router.ctrl.js 모듈에 들어있는 함수실행
router.post("/login", index_ctrl_router.index_supervise_user.login);
router.post("/register", index_ctrl_router.index_supervise_user.register);

router.post("/gettable", index_ctrl_router.index_supervise_user.test_table);

router.post("/getrfg", index_ctrl_router.index_supervise_user.get_RFG);

// 장바구니 추가 버튼을 눌렀을때 individual로 구현
router.post("/individual", index_ctrl_router.index_supervise_user.update_RFG);


module.exports = router;

// 유통기한 알림

// 프론트에서 년-월-일 이렇게 받잖아여
// 스트링으로 데베에 저장하고 
// 프론트에서 년-월-일로 string 바꿔서 백으로 전달
// string 년-월-일 ,년-월-일 배열로 된것을 다시 string to date format 날짜로 변경
// 2017-02-01
// 냉장고 들어가서 유통기한이 얼마나 남았습니다.
// 유통기한 계산해서 얼마나 남았는지 표시할거 아니면
// string 년 월 일 만 넣어서 ,기준으로 보여주면 