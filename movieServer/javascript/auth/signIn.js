import { UsersModel } from "../db/models";
import { pbkdf2Sync } from "crypto";
import jwt from "jsonwebtoken";

const signIn = async ({ id, password }) => {
  let message, result;
  const check = await UsersModel.findByEmail(id);
  let token;
  const loginPasswordToHashing = pbkdf2Sync(
    password,
    check[0].salt,
    100000,
    64,
    "sha512"
  );
  if (
    loginPasswordToHashing.toString("base64") === check[0].password &&
    check[0].checkLogin
  ) {
    token = jwt.sign(
      {
        id,
        name: check[0].name,
        loginCheck: true
      },
      "secret",
      {
        expiresIn: "30s",
        issuer: "dl57934",
        subject: "userInfo"
      }
    );
    result = true;
    message = "상훈상훈 무비에 오신걸 환영합니다.";
  } else {
    token = "";
    result = false;
    message = "아이디 혹은 비밀번호를 확인하세요.";
  }
  return { result, message, token };
};

export default signIn;
