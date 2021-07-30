"use strict";

const db = require("../config/db"),
    bcrypt = require("bcrypt");
// saltRounds는 env파일에 저장한 값. 비밀번호 해쉬에 사용
const saltRounds = process.env.Salt;

class UserStorage {
    // Mysql에서 ID를 기준으로 데이터를 불러와서 존재한다면 0번째 인덱스의 정보를 return
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM User WHERE id = ?";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`)
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            let hashing = "";
            bcrypt.hash(userInfo.psword, saltRounds, (err, hash) => {
                const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
                db.query(query, [userInfo.id, userInfo.name, hash], (err) => {
                    if (err) reject(`${err}`);
                    resolve({ success: true });
                });
            });
        });
    }

    static async get(){
        return new Promise((resolve, reject) => {
            const query = "SELECT IgdN1 FROM FoodIgd ";
            db.query(query, (err, data) => {
                //console.log('data : ',data)
                if (err) reject(`${err}`)
                resolve(data);
            });
        });
    }
}

module.exports = UserStorage;