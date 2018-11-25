import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { HashRouter, Route } from "react-router-dom";
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
        <HashRouter>
          <main>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/detail/:movieId"} component={Detail} />
            <Route path={"/login"} component={Login} />
            <Route path={"/signUp"} component={signUp} />
            <Route path={"/emailCheck/:token"} component={EmailCheck} />
          </main>
        </HashRouter>
      </ApolloProvider>
    );
  }
}

export default App;
