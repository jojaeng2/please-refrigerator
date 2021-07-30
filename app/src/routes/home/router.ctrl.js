"use strict";

const User = require("../../models/User");

// login, register post에 대한 변수 
const index_supervise_user = {
    login: async (req, res) => {
        const ctrl_request_user = new User(req.body);
        const ctrl_response_user = await ctrl_request_user.login();
        return ctrl_response_user;
    },

    register: async (req, res) => {
        const ctrl_request_user = new User(req.body);
        const ctrl_response_user = await ctrl_request_user.register();
        return ctrl_response_user;
    }
}



module.exports = {
    index_supervise_user,
};