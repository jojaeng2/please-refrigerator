"use strict";

const User = require("../../models/User");

// login, register 함수를 index_supervise_user에 넣음
// User class이용해서 return 값으로 {success : true} 를 받을경우 로그인 성공
const index_supervise_user = {
    login: async (req, res) => {
        console.log('받아온 값 : ', req.body)
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
        return res.json(req_table);

    }
}

module.exports = {
    index_supervise_user,
};