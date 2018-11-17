import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import {HashRouter, Route} from 'react-router-dom';
import client from './apolloClient';
import Home from './Home';
import Detail from './Detail';


class App extends Component{
    render(){
        return (
        <ApolloProvider client={client}>
            <HashRouter>
                <main>
                    <Route exact={true} path={'/'} component={Home}/>
                    <Route path={'/detail/:movieId'} component={Detail}/>
                </main>
            </HashRouter>
        </ApolloProvider>)
    }
}

export default App;