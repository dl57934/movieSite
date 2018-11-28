import { UsersModel } from "../db/models";
const signIn = async ({ id, password }) => {
  let message, result;
  console.log(id, password);
  const check = await UsersModel.find({ id, password });
  console.log(check);
  if (check.length > 0) {
    result = true;
    message = "상훈상훈 무비에 오신걸 환영합니다.";
  } else {
    result = false;
    message = "아이디 혹은 비밀번호를 확인하세요.";
  }
  return { result, message };
};

export default signIn;
