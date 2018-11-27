import React, { Component } from "react";
import styled from "styled-components";
import { SignUp } from "./signUpQueries";
import { Mutation } from "react-apollo";

class signUp extends Component {
  render() {
    return (
      <SignUpContainer>
        <Title>SignUp</Title>
        <span>
          <EmailInput id="inputId" email placeholder="학교이메일" />
          @pukyong.ac.kr
        </span>
        <WarningMessage>
          학교 이메일만 사용할 수 있습니다.
          <br /> 이메일 인증이 완료되어야 회원가입할 수 있습니다.
        </WarningMessage>
        <Input email placeholder="이름" id="inputName" required />
        <Input placeholder="비밀번호" id="inputPw" required />
        <Input placeholder="비밀번호 확인" id="reInputPw" required />
        <Mutation mutation={SignUp}>
          {SignUp => {
            this.requestSignUp = SignUp;
            return (
              <CustomButton onClick={this._emailCheck} type="submit">
                회원 가입
              </CustomButton>
            );
          }}
        </Mutation>
      </SignUpContainer>
    );
  }

  //8자리 이상 20자리 미만 최소 특수문자 한개 포함
  _emailCheck = async () => {
    const max = 9999999999;
    const min = 1000000000;
    const id = document.getElementById("inputId").value + "@pukyong.ac.kr";
    const password = document.getElementById("inputPw").value.toLowerCase();
    const name = document.getElementById("inputName").value;
    if (id !== "" && password !== "" && name !== "" && this._passwordCheck()) {
      const token = Math.floor(Math.random() * (max - min) + min);
      const {
        data: { signUp }
      } = await this.requestSignUp({
        variables: { id, password, name, token }
      });
      const {
        history: { push }
      } = this.props;
      console.log(`결과 ${signUp}`);
      if (signUp) push(`/emailCheck`);
      else alert("이미 같은 아이디의 사용자가 있습니다");
    } else alert("입력 창 또는 비밀번호가 같은지 확인해주세요");
  };
  _passwordCheck() {
    const password = document.getElementById("inputPw").value;
    const rePassword = document.getElementById("reInputPw").value;
    if (password === rePassword) return true;
    return false;
  }
}

const WarningMessage = styled.p`
  color: red;
  font-weight: 600;
`;

const CustomButton = styled.button`
  ::after {
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  ::before,
  ::after {
    background: skyblue;
    content: "";
    position: absolute;
    z-index: -1;
  }
  :hover {
    color: black;
  }
  background: none;
  border: 3px solid skyblue;
  border-radius: 5px;
  color: #fff;
  display: block;
  font-size: 18px;
  font-weight: bold;
  margin-top: 30px;
  margin-right: 32px;
  width: 20%;
  height: 10%;
  position: relative;
  text-transform: uppercase;
  ::after {
    height: 0;
    left: 0;
    top: 0;
    width: 100%;
  }
  :hover:after {
    height: 100%;
  }
`;

const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 700px;
  color: white;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 50px;
  margin-top: 30px;
  margin-bottom: 80px;
  margin-right: 20px;
`;

const Input = styled.input.attrs({
  type: props => (props.email ? "text" : "password")
})`
  font-size: 15px;
  margin: 18px 0;
  width: 22%;
  font-weight: 600;
  padding: 10px 12px;
  border-radius: 10px;
  margin-right: 28px;
`;

const EmailInput = styled(Input)`
  width: 52%;

  margin-right: 10px;
`;

export default signUp;
