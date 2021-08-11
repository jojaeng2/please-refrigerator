"use strict";

const LoginSql = require("./loginSql");
const Token = require("../../models/token/Token");

class LoginClass {
    constructor(url) {
        this.body = url; // 프론트에서 받아온 req 값을 user.body에 저장함.
    }

    async GetLogin() {
        const client = this.body; //body에 
        try {
            const user = await LoginSql.GetLogin(client.id);
            if (user) {
                //let this_check_info = await bcrypt.compare(client.psword, user.psword);
                if (user.ID === client.id) {
                    return { nickname : user.Name,id : user.ID, success: true, token: Token.CreateToken(user.ID, user.Name), };
                }
                return { success: false, msg: "비밀번호가 틀렸습니다." };
            }
            return { success: false, msg: "존재하지 않는 아이디입니다." };
        } catch (err) {
            return { success: false, err };
        }
    }

    async GetTokenCheck() {
        const client = this.body; //body에 
        try {
            return{
                token : Token.CheckToken(client.token)
            }
        } catch (err) {
            return { success: false, err };
        }
    }

    async GerRegister() {
        const client = this.body;
        console.log(client)
        try {
            const response = await LoginSql.GetRegister(client);
            return response;
        } catch (err) {
            console.log(err)
            return { success: false, msg: "이미 존재하는 아이디입니다." };
        }
    }  
}

module.exports = LoginClass;
