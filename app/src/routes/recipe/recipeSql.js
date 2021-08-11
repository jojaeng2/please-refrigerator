"use strict";

const db = require("../../config/db"),
    bcrypt = require("bcrypt");
// saltRounds는 env파일에 저장한 값. 비밀번호 해쉬에 사용
const saltRounds = parseInt(process.env.Salt);

class RecipeSql {

    static async GetRecipe(name) {
        return new Promise((resolve, reject) => {
            const recipe_query = "SELECT * FROM FoodMain,FoodIgd,Recipe WHERE FoodIgd.FoodId = Recipe.FoodId and FoodIgd.FoodId=FoodMain.FoodId and FoodMain.FoodId=(?)";
            const user_query = "SELECT * FROM likeit WHERE userid = (?) AND foodid =(?)";
            db.query(recipe_query,[name.id], (err, data) => {
                if (err) reject(`${err}`);
                else {
                    if(name.userid !== '') {
                        db.query(user_query, [name.userid, name.id], (err, check) => {
                        if(err) reject(`${err}`);
                        resolve({data:data, check : (check.length > 0 ? true : false)});
                        })
                    }
                    else resolve({data:data, check: false});   
                }
            });
        });
    }
   
    static async AddLike(req) {
        return new Promise((resolve, reject) => {
            const lquery = "UPDATE FoodMain SET likeit = likeit+1 WHERE FoodId = (?);"
            const uquery = "INSERT INTO likeit(foodid, userid, foodname) VALUES(?, ?, ?);";
            db.query(lquery,[req.id], (err, data) => {
                if (err) reject(`${err}`);
                else {
                    db.query(uquery, [req.id, req.userid, req.foodname], (err, check)=> {
                        if(err) reject(`${err}`);
                        resolve({success:true});
                    })  
                }
            });
        });
    }

}

module.exports = RecipeSql;