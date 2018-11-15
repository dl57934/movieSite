import React, { Component, Fragment } from 'react';
import client from './apolloClient';
import { ApolloProvider } from 'react-apollo';
import {HashRouter, Route} from 'react-router-dom';
import Home from './Home';
import Detail from './detail';

class App extends Component {
    render() {
        return (
        <ApolloProvider client={client}>
            <HashRouter>
                <Fragment>
                    <Route exact={true} path={'/'} component={Home}/>
                    <Route path={'/details/:movieId'} component={Detail}/>
                </Fragment>
            </HashRouter>
        </ApolloProvider>
        )
    }
}

export default App;
