import React, { Component } from "react";
import styled from "styled-components";
import { LOGIN } from "../quries";
import { Query } from "react-apollo";

class Login extends Component {
  runQuery;
  loginCheck = () => (
    <Query query={LOGIN({ id: "hihi", password: "nihao" })}>
      {({ data, error, loading }) => {
        if (error) console.log(error);
        if (loading) return "loging.....";
        console.log(data);
        return "complete";
      }}
    </Query>
  );
  render() {
    return (
      <LoginContainer>
        <LoginTitle>Login</LoginTitle>
        <Label>email</Label>
        <LoginInput />
        <Label>password</Label>
        <LoginInput password />
        <CustomButton onClick={this.loginCheck}>Login</CustomButton>
      </LoginContainer>
    );
  }
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
