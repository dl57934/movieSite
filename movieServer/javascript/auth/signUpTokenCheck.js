import { UsersModel } from "../db/models";
const signUpTokenCheck = ({ token }) => {
  UsersModel.find({ token: Number(token) }, (err, results) => {
    console.log(results);
  });
  return true;
};

export default signUpTokenCheck;
