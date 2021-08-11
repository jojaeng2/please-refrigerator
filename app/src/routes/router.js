"use strict";
const path = require('path');
const express = require("express"),
    login_ctrl_router = require("./login/login.ctrl"),
    recipe_ctrl_router = require("./recipe/recipe.ctrl"),
    rfgpage_ctrl_router = require("./rfgpage/rfgpage.ctrl"),
    borad_ctrl_router = require("./board/board.ctrl"),
    mainpage_ctrl_router = require("./mainpage/mainpage.ctrl"),
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

///////////////////////
//// 로그인 관련 POST ////
///////////////////////
router.post("/login", login_ctrl_router.login_request.GetLogin);
router.post("/tokencheck", login_ctrl_router.login_request.GetTokenCheck);
router.post("/register", login_ctrl_router.login_request.GetRegister);

//////////////////////////
////// mainpage POST//////
/////////////////////////
router.post("/gettable", mainpage_ctrl_router.mainpage_request.GetFoodMain);
router.post("/liverank", mainpage_ctrl_router.mainpage_request.GetRank);

/////////////////////////////////
////// 레시피:id에 대한 post ///////
////////////////////////////////
router.post("/getrcp/:id", recipe_ctrl_router.recipe_request.GetRecipe);
router.post("/addlike", recipe_ctrl_router.recipe_request.AddLike);

/////////////////////////////////
////// rfgpage에 대한 post ///////
/////////////////////////////////
router.post("/getidgrc", rfgpage_ctrl_router.rfgpage_request.GetIgdrc);
router.post("/getrfg", rfgpage_ctrl_router.rfgpage_request.GetUserRFG);
router.post("/getigd", rfgpage_ctrl_router.rfgpage_request.GetIgd);
router.post("/individual", rfgpage_ctrl_router.rfgpage_request.UpdateRFG);

/////////////////////////////////
//// 게시판(board)에 대한 post /////
/////////////////////////////////
// (1) read
router.post("/getfree", borad_ctrl_router.board_request.GetFree);
router.post("/getnotice", borad_ctrl_router.board_request.GetNotice);
router.post("/notice:id", borad_ctrl_router.board_request.GetNoticeId);
router.post("/free:id", borad_ctrl_router.board_request.GetFreeId);
// (2) create
router.post("/addfree", borad_ctrl_router.board_request.AddFree);
router.post("/addnotice", borad_ctrl_router.board_request.AddNotice);
// (3) delete
router.post("/deletefree/:id", borad_ctrl_router.board_request.DeleteFree);
// 댓글
router.post("/addreply", borad_ctrl_router.board_request.AddReply);
router.post("/getreply/:id", borad_ctrl_router.board_request.GetReply);


module.exports = router;

