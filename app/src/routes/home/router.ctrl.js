"use strict";

const User = require("../../models/User"),
    url = require('url'),
    bodyParser = require("body-parser");

// login, register 함수를 index_supervise_user에 넣음
// User class이용해서 return 값으로 {success : true} 를 받을경우 로그인 성공
const index_supervise_user = {
    login: async (req, res) => {
        const ctrl_request_user = new User(req.body);
        const ctrl_response_user = await ctrl_request_user.login();
        return res.send(ctrl_response_user);
    },
    token_check: async (req, res) => {
        const ctrl_request_user = new User(req.body);
        const ctrl_response_user = await ctrl_request_user.token_check();
        return res.send(ctrl_response_user);
    },
    register: async (req, res) => {
        const ctrl_request_user = new User(req.body);
        const ctrl_response_user = await ctrl_request_user.register();
        return res.json(ctrl_response_user);
    },
    test_table : async (req,res)=>{
        const table = new User(req.body);
        const req_table = await table.gettable();
        return res.json(req_table);
    },

    get_rank : async (req,res)=>{
        const req_rank = new User(req.body);
        const res_rank = await req_rank.getrank();
        return res.json(res_rank);
    },

    get_igd : async (req,res)=>{
        const table = new User(req.body);
        const req_table = await table.getigd();
        return res.json(req_table);
    },
    get_recipe : async (req,res)=>{
        const recipe = new User(req.params.id);
        const req_table = await recipe.getrecipe();
        return res.json(req_table);
    },

    add_free : async (req, res) => {
        console.log("req, ",req.body);
        const req_free_board = new User(req.body);
        const res_free_board = await req_free_board.addfree();
        return res.json(res_free_board);
    },

    add_notice : async (req, res) => {
        console.log("req, ",req.body);
        const req_free_board = new User(req.body);
        const res_free_board = await req_free_board.addnotice();
        return res.json(res_free_board);
    },
    get_idgrc: async (req, res) => {
        console.log(req.body)
        const get_request_RFG = new User(req.body);
        const get_response_RFG = await get_request_RFG.get_idgrc();
        return res.json(get_response_RFG);
    },
    get_RFG : async (req, res) => {
        const get_request_RFG = new User(req.body);
        const get_response_RFG = await get_request_RFG.Squery();
        return res.json(get_response_RFG);
    },
    update_RFG : async (req, res) => {
        const update_request_RFG = new User(req.body);
        const update_response_RFG = await update_request_RFG.DIquery();
        console.log(update_response_RFG);
        return res.json(update_response_RFG);
    },

    get_free : async (req, res) => {
        const req_free = new User(req.body);
        const get_response_RFG = await req_free.getfree();
        return res.json(get_response_RFG);
    },

    get_notice : async (req, res) => {
        const req_notice = new User(req.body);
        const get_response_RFG = await req_notice.getnotice();
        return res.json(get_response_RFG);
    },

    get_notice_id : async (req, res) => {
        const req_notice_id = new User(req.params.id);
        const res_notice_id = await req_notice_id.noticeid();
        return res.json(res_notice_id);
    },

    get_free_id : async (req, res) => {
        const req_free_id = new User(req.params.id);
        const res_free_id = await req_free_id.freeid();
        return res.json(res_free_id);
    },

    delete_free : async (req, res) => {
        const req_delete_free = new User(req.params.id);
        const res_response_free = await req_delete_free.deletefree();
        return res.json(res_response_free);
    },
}

module.exports = {
    index_supervise_user,
};


