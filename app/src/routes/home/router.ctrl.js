"use strict";

const User = require("../../models/User");

// login, register 함수를 index_supervise_user에 넣음
// User class이용해서 return 값으로 {success : true} 를 받을경우 로그인 성공
const index_supervise_user = {
    login: async (req, res) => {
        console.log(req);
        const ctrl_request_user = new User(req.body);
        const ctrl_response_user = await ctrl_request_user.login();
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
        console.log((req_table));
        return res.json(req_table);
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
    }
}

module.exports = {
    index_supervise_user,
};


