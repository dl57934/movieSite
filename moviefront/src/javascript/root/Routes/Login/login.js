import React, { Component } from "react";
import styled from "styled-components";
import { SIGNIN } from "./loginQuries";
import { Mutation } from "react-apollo";
import { sha256 } from "js-sha256";

class Login extends Component {
  render() {
    return (
      <LoginContainer>
        <LoginTitle>Login</LoginTitle>
        <Label placeholder="email입력">id</Label>
        <span>
          <EmailInput id="id" />
          @pukyong.ac.kr
        </span>
        <Label>password</Label>
        <LoginInput password id="password" />
        <Mutation mutation={SIGNIN}>
          {signIn => {
            this.signIn = signIn;
            return (
              <CustomButton onClick={this._loginEvent}>Login</CustomButton>
            );
          }}
        </Mutation>
      </LoginContainer>
    );
  }
  _loginEvent = async () => {
    const inputId = document.getElementById("id").value;
    const inputPassword = document.getElementById("password").value;
    const hashedPassword = sha256(inputPassword);
    const {
      history: { push }
    } = this.props;

    const {
      data: {
        signIn: { message, result, token }
      }
    } = await this.signIn({
      variables: {
        id: inputId + "@pukyong.ac.kr",
        password: hashedPassword
      }
    });
    if (result) {
      console.log(token);
      localStorage.setItem("jwt", token);
      alert(message);
      push("/home/1");
    } else {
      alert(message);
    }
  };

  _passwordCheck = password => {
    const passwordCheck = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/;
    if (passwordCheck.test(password)) return true;
    return false;
  };
}

const LoginInput = styled.input.attrs({
  type: props => (props.password ? "password" : "email")
})`
  margin: 30px 0;
  border-radius: 8px;
  width: 18%;
  height: 5%;
  font-size: 17px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const EmailInput = styled(LoginInput)`
  width: 40%;
  padding: 3%;
  font-weight: 600;
  font-weight: 20px;
  margin-right: 9px;
  margin-left: 60px;
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
  margin-top: 15px;
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
