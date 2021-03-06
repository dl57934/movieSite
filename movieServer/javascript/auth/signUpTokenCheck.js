import { UsersModel } from "../db/models";
const signUpTokenCheck = async ({ token }) => {
  let message;

  let result = await UsersModel.findByToken(token);

  if (result) {
    result.checkLogin = true;
    result.save();
    message = "회원가입이 완료되었습니다.";
    return { result: true, message };
  } else {
    message = "이미 회원가입한 정보이거나 없는 없는 정보입니다.";
    return { result: false, message };
  }
};

export default signUpTokenCheck;
