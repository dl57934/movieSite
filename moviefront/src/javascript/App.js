import React, { Component } from 'react';
import client from './apolloClient';
import { ApolloProvider } from 'react-apollo';

class App extends Component {
    render() {
        return (
        <ApolloProvider client={client}>
            <div className="App"/>
        </ApolloProvider>
        )
    }
}

export default App;
