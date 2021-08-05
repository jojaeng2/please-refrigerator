"use strict";

const db = require("../config/db"),
    bcrypt = require("bcrypt");
// saltRounds는 env파일에 저장한 값. 비밀번호 해쉬에 사용
const saltRounds = parseInt(process.env.Salt);

class UserSql {
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

    static async save(userInfo) { //req = userinfo req.body.id = asd
        return new Promise(async (resolve, reject) => {
            const hashing = await bcrypt.hash(userInfo.psword, saltRounds);
            const query = "INSERT INTO User(ID, Name, Psword) VALUES(?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, hashing], (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        });
    }

    static async get(name) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM FoodMain";
            db.query(query, (err, data) => {
                if (err) reject(`${err}`)
                resolve(data);
            });
        });
    }

    static async getrecipe(name) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM FoodMain,FoodIgd,Recipe WHERE FoodIgd.FoodId = Recipe.FoodId and FoodIgd.FoodId=FoodMain.FoodId and FoodMain.FoodId=(?)"
            db.query(query,[name], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data);
            });
        });
    }

    static async selectRFG(name) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM UserRfg where ID=(?)";
            db.query(query,[name.id], (err, data) => {
                if (err) reject(`${err}`)
                resolve(data);
            });
        });
    }


    static async deleteRFG(userid) {
        return new Promise(async (resolve, reject) => {
            const dquery = "DELETE FROM UserRfg WHERE ID=(?)";
            const iquery = "INSERT INTO UserRfg(ID, Igdname, Eprdate) VALUES(?, ?, ?);";
            db.query(dquery, [userid.id], (err) => {
                if (err) reject(`${err}`);
                else {
                    db.query(iquery, [userid.id, userid.igdname, userid.eprdate], (err) => {
                        if (err) reject(`${err}`);
                        else
                            resolve({ success: true });
                    });
                }
            });
        });
    }


}

module.exports = UserSql;