"use strict";
const path = require('path');
const express = require("express"),
    index_ctrl_router = require("./router.ctrl"),
    url = require("url"),
    bodyParser = require("body-parser");

const app = express();
// URL을 통해 전달되는 데이터에 한글, 공백 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: false}));




const router = express.Router();
router.use(express.static(path.join(__dirname, './build')));
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./build/index.html"));
  });

// FE로 부터 POST 요청을 받아 router.ctrl.js 모듈에 들어있는 함수실행
router.post("/login", index_ctrl_router.index_supervise_user.login);
router.post("/tokencheck", index_ctrl_router.index_supervise_user.token_check);
router.post("/register", index_ctrl_router.index_supervise_user.register);

router.post("/gettable", index_ctrl_router.index_supervise_user.test_table);
// FoodMain 테이블 넘겨줌

router.post("/liverank", index_ctrl_router.index_supervise_user.get_rank);

router.post("/getigd", index_ctrl_router.index_supervise_user.get_igd);
// 재료 테이블 다 넘겨주기

router.post("/getrcp/:id", index_ctrl_router.index_supervise_user.get_recipe);

// id와 게시글 번호가 같은 게시글 요청
router.post("/notice:id", index_ctrl_router.index_supervise_user.get_notice_id);
router.post("/free:id", index_ctrl_router.index_supervise_user.get_free_id);


// 게시글 작성 요청이 들어오는 경우
router.post("/addfree", index_ctrl_router.index_supervise_user.add_free);
router.post("/addnotice", index_ctrl_router.index_supervise_user.add_notice);

//재료로 추천받기
router.post("/getidgrc", index_ctrl_router.index_supervise_user.get_idgrc);

router.post("/getrfg", index_ctrl_router.index_supervise_user.get_RFG);

// 게시판 공지와 자유글 불러오기
router.post("/getfree", index_ctrl_router.index_supervise_user.get_free);
router.post("/getnotice", index_ctrl_router.index_supervise_user.get_notice);

// 자유게시판 글 삭제
router.post("/deletefree/:id", index_ctrl_router.index_supervise_user.delete_free);

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