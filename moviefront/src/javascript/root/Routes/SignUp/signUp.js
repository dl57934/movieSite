import React, { Component } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const SignUp = gql`
  mutation signUp(
    $id: String!
    $password: String!
    $name: String!
    $token: Float!
  ) {
    signUp(id: $id, password: $password, name: $name, token: $token)
  }
`;

class signUp extends Component {
  state = {
    emailCheck: false,
    passwordCheck: false,
    id: ""
  };
  input = "";
  back = "@pukyong.ac.kr";
  render() {
    return (
      <SignUpContainer>
        <Title>SignUp</Title>
        <Input
          name="id"
          id="inputId"
          email
          onKeyDown={this._keyDown}
          value={this.state.id + this.back}
        />
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
              <CustomButton
                onClick={this._emailCheck}
                name="emailCheck"
                type="submit"
              >
                {this.state.emailCheck ? "이메일 확인완료" : "이메일 확인"}
              </CustomButton>
            );
          }}
        </Mutation>
      </SignUpContainer>
    );
  }
  _keyDown = e => {
    let keyValue = e.keyCode;
    if (keyValue === 8) {
      this.input = this.input.substring(0, this.input.length - 1);
    } else if (keyValue !== 229 && keyValue !== 9) {
      if (65 <= keyValue && keyValue <= 90) if (!e.shiftKey) keyValue += 32;
      this.input += String.fromCharCode(keyValue);
    }
    this.setState({
      [e.target.name]: this.input
    });
  };

  //8자리 이상 20자리 미만 최소 특수문자 한개 포함
  _emailCheck = e => {
    this.setState({
      [e.target.name]: !this.state.emailCheck
    });
    const max = 9999999999;
    const min = 1000000000;
    const id = document.getElementById("inputId").value;
    const password = document.getElementById("inputPw").value;
    const name = document.getElementById("inputName").value;
    if (id !== "" && password !== "" && name !== "" && this._passwordCheck()) {
      const token = Math.floor(Math.random() * (max - min) + min);
      this.requestSignUp({ variables: { id, password, name, token } });
      const {
        history: { push }
      } = this.props;
      push(`/emailCheck/${token}`);
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

export default signUp;
