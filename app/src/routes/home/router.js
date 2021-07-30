"use strict";

const express = require("express"),
    index_ctrl_router = require("./router.ctrl");
const router = express.Router();



router.post("/login",index_ctrl_router.index_supervise_user.login);
router.post("/register", index_ctrl_router.index_supervise_user.register);

module.exports = router;