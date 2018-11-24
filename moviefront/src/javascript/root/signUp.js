import React, { Component } from "react";
import styled from "styled-components";

class signUp extends Component {
  state = {
    emailCheck: false,
    passwordCheck: false
  };
  render() {
    return (
      <SignUpContainer>
        <Title>SignUp</Title>
        <Label>Id</Label>
        <span>
          <Input email placeholder="email형태로 입력해주세요" />
          <CustomButton onClick={this._emailCheck} name="emailCheck">
            {this.state.emailCheck ? "이메일 확인완료" : "이메일 확인"}
          </CustomButton>
        </span>
        <Label>비밀번호</Label>
        <Input
          email
          placeholder="8자리 이상 20자리 미만 최소 특수문자 한개 포함"
        />
        <Label>비밀번호 확인</Label>
        <Input email />
      </SignUpContainer>
    );
  }
  _emailCheck = e => {
    this.setState({
      [e.target.name]: !this.state.emailCheck
    });
    console.log(e.target);
  };
}

const CustomButton = styled.button`
  ::after {
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  ::before,
  ::after {
    background: gold;
    content: "";
    position: absolute;
    z-index: -1;
  }
  :hover {
    color: black;
  }
  background: none;
  border: 3px solid gold;
  border-radius: 5px;
  color: #fff;
  display: block;
  font-size: 1.6em;
  font-weight: bold;
  margin: 1em auto;
  width: 31%;
  height: 3%;
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

const Label = styled.h1`
  font-size: 30px;
  font-weight: 400;
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
  margin-top: 40px;
  margin-bottom: 80px;
`;

const Input = styled.input.attrs({
  type: props => (props.email ? "email" : "password")
})`
  margin: 40px 0;
  width: 300px;
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 20px;
`;

export default signUp;
