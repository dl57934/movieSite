import { UsersModel } from "../db/models";
import { pbkdf2Sync } from "crypto";
const signIn = async ({ id, password }) => {
  let message, result;
  const check = await UsersModel.find({ id });
  console.log(password);
  const loginPasswordToHashing = pbkdf2Sync(
    password,
    check[0].salt,
    100000,
    64,
    "sha512"
  );
  console.log("check[0].password: " + check[0].password);
  console.log(loginPasswordToHashing.toString("base64"));
  if (
    loginPasswordToHashing.toString("base64") === check[0].password &&
    check[0].checkLogin
  ) {
    result = true;
    message = "상훈상훈 무비에 오신걸 환영합니다.";
  } else {
    result = false;
    message = "아이디 혹은 비밀번호를 확인하세요.";
  }
  return { result, message };
};

export default signIn;
