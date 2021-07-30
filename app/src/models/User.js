"use strict";
const bcrypt = require("bcrypt");
const Token = require("./token/Token");

class User {
    constructor(body) {
        this.body = body;
    }


    // DB에 접속하여 body.id를 키값으로 유저정보 불러옴. 
    async login() {
        const client = this.body;
        try {
            const user = await UserStorage.getUserInfo(client.id);
            if (user) {
                let this_check_info = await bcrypt.compare(client.psword, user.psword);
                if (user.id === client.id && this_check_info) {
                    return { success: true, token: Token.CreateToken(id, nickname) };
                }
                return { success: false, msg: "비밀번호가 틀렸습니다." };
            }
            return { success: false, msg: "존재하지 않는 아이디입니다." };
        } catch (err) {
            return { success: false, err };
        }
    }


    // DB에 접속하는 save 함수 사용
    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return { success: false, err };
        }
    }
}


// 토큰안에 정보가 id , 닉네임 , 유효기간 

// id ,pwd 가 동일하면 토큰을 생성하는 함수를 사용해서 만들어서 프론트에 전달 (성공시에 토큰을 만들어주는 함수 만들어야함)

// 동일하지 않을시에는 토큰을 반환하지 않고 msg'로그인에 실패했습니다.'만 반환
// 이거를 프론트에서 localStorage에 저장

// 만약 localStorage에 토큰이 있으면 
// 토큰이 유효한지 체크해주는 함수가 백엔드에서 있음 - > 체크요청하는 post 과정이 필요함

