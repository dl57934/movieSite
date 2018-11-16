import React, { Component, Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Home';
import Detail from './detail';
import client from './apolloClient';

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <HashRouter>
                    <Fragment>
                        <Route exact={true} component={Home} path={'/'} />
                        <Route component={Detail} path={'/detail/:movieId'} />
                    </Fragment>
                </HashRouter>
            </ApolloProvider>
        )
    }
}

export default App;
