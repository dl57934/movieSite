import React, { Component } from "react";
import styled from "styled-components";
import { LOGIN, HOME_PAGE } from "../quries";
import { Mutation } from "react-apollo";
import { sha512 } from "js-sha512";

class Login extends Component {
  render() {
    return (
      <LoginContainer>
        <LoginTitle>Login</LoginTitle>
        <Label placeholder="email입력">email</Label>
        <LoginInput id="id" />
        <Label>password</Label>
        <LoginInput password id="password" />
        <Mutation mutation={LOGIN}>
          {login => {
            this.login = login;
            return (
              <CustomButton onClick={this._loginEvent}>Login</CustomButton>
            );
          }}
        </Mutation>
      </LoginContainer>
    );
  }
  _loginEvent = () => {
    const inputId = document.getElementById("id").value;
    const inputPassword = document.getElementById("password").value;
    if (this._loginCheck(inputId, inputPassword)) {
      const {
        history: { push }
      } = this.props;

      this.login({
        variables: {
          id: inputId,
          password: inputPassword
        }
      }).then(response => {
        const {
          data: { login }
        } = response;
        if (login) push("/");
        alert("login Failed");
      });
    } else {
      alert("잘못된 아이디나 비밀번호를 입력하였습니다.");
    }
  };

  _loginCheck = (id, password) => {
    const passwordCheck = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/;
    console.log(sha512(password));

    return false;
  };
}

const LoginInput = styled.input.attrs({
  type: props => (props.password ? "password" : "email")
})`
  margin: 30px 0;
  border-radius: 8px;
  width: 25%;
  height: 5%;
  font-size: 17px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  width: 20%;
  height: 8%;
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
  font-size: 20px;
  font-weight: 400;
`;

const LoginTitle = styled.h1`
  font-size: 80px;
  color: white;
  max-width: 50%;
  margin-bottom: 50px;
`;

const LoginContainer = styled.div`
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;

export default Login;
