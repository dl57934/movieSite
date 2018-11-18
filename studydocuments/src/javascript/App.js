import React, { Component, Fragment } from 'react';
import client from './ApolloClient';
import { ApolloProvider } from 'react-apollo';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Home';
import Detail from "./Detail";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <HashRouter>
          <Fragment>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/detail/:movieId"} component={Detail} />
          </Fragment>
        </HashRouter>
      </ApolloProvider>
    );
  }
}

export default App;
