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
                console.log(data)
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
            const query = "SELECT * FROM FoodMain WHERE FoodN LIKE '%"+name.id+"%' ORDER BY likeit DESC";
            db.query(query ,(err, data) => {
                if (err) reject(`${err}`)
                //console.log(data)
                resolve(data);
            });
        });
    }

    static async getrank(name) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM FoodMain ORDER BY likeit DESC";
            db.query(query ,(err, data) => {
                if (err) reject(`${err}`)
                //console.log(data)
                resolve(data);
            });
        });
    }

    static async getigd(name) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM FoodIgd";
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

    static async noticeid(number) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM noticeboard WHERE number=(?)"
            db.query(query,[number], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data);
            });
        });
    }

    static async freeid(number) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM freeboard WHERE number=(?)"
            db.query(query,[number], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data);
            });
        });
    }

    static async get_idgrc(req) {
        console.log(req.igd)
        return new Promise((resolve, reject) => {
            const query =  "SELECT  FoodId FROM FoodIgd WHERE IgdN1 LIKE '%"+req.igd+"%' OR  IgdN2 LIKE '%"+req.igd+"%' OR  IgdN3  LIKE '%"+req.igd+"%' OR  IgdN4  LIKE '%"+req.igd+"%'  OR  IgdN5  LIKE '%"+req.igd+"%' OR  IgdN6  LIKE '%"+req.igd+"%' OR  IgdN7  LIKE '%"+req.igd+"%' OR  IgdN8  LIKE '%"+req.igd+"%' OR  IgdN9  LIKE '%"+req.igd+"%' OR  IgdN10  LIKE '%"+req.igd+"%' OR  IgdN11  LIKE '%"+req.igd+"%' OR  IgdN12  LIKE '%"+req.igd+"%' OR  IgdN13  LIKE '%"+req.igd+"%' OR  IgdN14  LIKE '%"+req.igd+"%' OR  IgdN15 LIKE '%"+req.igd+"%'"
            db.query(query, (err, data) => {
                if (err) reject(`${err}`);
                resolve(data);
            });
        });
    }

    static async addnotice(req) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO noticeboard(id, title, description, createdate) VALUES(?, ?, ?, NOW());"
            db.query(query,[req.id, req.title, req.description], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data);
            });
        });
    }

    static async addfree(req) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO freeboard(id, nickname, title, description, created, count) VALUES(?, ?, ?, ?, NOW(), 0);"
            db.query(query,[req.id, req.nickname, req.title, req.description], (err, data) => {
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

    static async getfree(req) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM freeboard;"
            db.query(query, (err, data) => {
                if (err) reject(`${err}`);
                resolve(data);
            });
        });
    }

    static async getnotice(req) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM noticeboard;"
            db.query(query, (err, data) => {
                if (err) reject(`${err}`);
                resolve(data);
            });
        });
    }

    static async deletefree(req) {
        return new Promise((resolve, reject) => {
            const query = "DELETE FROM freeboard WHERE number=(?);"
            db.query(query, [req], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data);
            });
        });
    }


}

module.exports = UserSql;