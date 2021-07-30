"use strict";

const db = require("../config/db");
const bcrypt = require("bcrypt");
const saltRounds = process.env.Salt;

class UserStorage {

    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM User WHERE id = ?";
            db.query(query, [id], (err, data) => {
                if(err) {
                    reject(`${err}`)
            };
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
                    if(err) reject(`${err}`);
                    resolve({ success: true });
                });
            });
        });
    }
}

module.exports = UserStorage;