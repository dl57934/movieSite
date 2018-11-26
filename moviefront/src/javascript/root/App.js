import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import client from "../apolloClient";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Login from "./Routes/Login";
import signUp from "./Routes/SignUp";
import EmailCheck from "./Routes/EmailCheck";

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
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
