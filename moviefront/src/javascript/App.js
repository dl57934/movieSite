import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import client from "./apolloClient";
import Home from "./root/Routes/Home";
import Detail from "./root/Routes/Detail";
import Login from "./root/Routes/Login";
import signUp from "./root/Routes/SignUp";
import EmailCheck from "./root/Routes/EmailCheck";
import SignUpComplete from "./root/Routes/SignUpComplete";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/home/:page" component={Home} />
            <Route path="/detail/:movieId" component={Detail} />
            <Route path="/login" component={Login} />
            <Route path="/signUp" component={signUp} />
            <Route path="/emailCheck/:token" component={EmailCheck} />
            <Route path="/signUpComplete" component={SignUpComplete} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
