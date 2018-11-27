import { createTransport } from "nodemailer";
import { UsersModel } from "../../db/models";

const signUp = ({ id, password, name, token }) => {
  if (existEmailCheck(id)) {
    const user = new UsersModel({
      id,
      password,
      name,
      token,
      checkLogin: false
    });
    user.save();
    console.log("true");
    sendEmail(id, token);
    return true;
  } else {
    console.log("일치하는 사용자 찾음");
    return false;
  }
};

const existEmailCheck = id => {
  let result;
  UsersModel.find({ id: id }, (err, results) => {
    if (results.length > 0) {
      console.log(results);
      result = false;
    } else {
      console.log(results);
      result = true;
    }
  });
  return result;
};

const sendEmail = (id, token) => {
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: "dl57934@gmail.com",
      pass: "dngmadl14"
    }
  });
  let mailOptions = {
    from: "dl57934@gmail.com", // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
    to: id, // 수신 메일 주소
    subject: "상훈상훈 무비 회원가입 인증입니다.", // 제목
    html: `<h1>아래의 웹사이트에 접속하시면 회원가입이 완료됩니다.</h1><br/><a href=http://localhost:3000/#/emailCheck/${token}>여길 눌러주세요!!</a>`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });
};

export default signUp;
