import React, { Component } from "react";
import styled from "styled-components";

class HeaderApp extends Component {
  render() {
    return (
      <HeaderCard>
        <TitleName as="a" href="/">
          상훈상훈 무비
        </TitleName>
        <LoginSignUp as="a" href="/#/login" login>
          로그인
        </LoginSignUp>
        <LoginSignUp as="a" href="/#/signUp">
          회원가입
        </LoginSignUp>
      </HeaderCard>
    );
  }
}

const TitleName = styled.h1`
  color: white;
  font-size: 55px;
  text-decoration: none;
  :hover {
    color: gold;
  }
`;

const LoginSignUp = styled.p`
  color: white;
  text-decoration: none;
  float: right;
  margin: 20px ${props => (props.login ? "50px" : "20px")} 0 0;
  justify-items: center;
  :hover {
    color: gold;
  }
`;

const HeaderCard = styled.div`
  margin-top: 30px;
`;

export default HeaderApp;
