const jwt = require('jsonwebtoken');//로그인토큰
const bcrypt = require("bcrypt");
require("dotenv").config();

//토큰생성
const CreateToken = (id, nickname) => {
  return jwt.sign({ id, nickname }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10m", // 토큰 유효시간 10분임
  });
};

//토큰 유효성 검사
const CheckToken = (token) => {
  try {
    // 요청 헤더에 저장된 토큰(req.headers.authorization)과 비밀키를 사용하여 토큰 반환
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  }
  // 인증 실패
  catch (error) {
    console.log(error.name);
    // 유효기간이 초과된 경우
    if (error.name === 'TokenExpiredError') {
      return { success: false, msg: '토큰이 만료되었습니다.' }; // 419 추가예정
    }
    // 토큰의 비밀키가 일치하지 않는 경우
    return { success: false, msg: '유효하지 않은 토큰입니다.' }; // 401 추가예정
  }
};

module.exports = {
  CreateToken,
  CheckToken,
};