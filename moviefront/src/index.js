import React from 'react';
import ReactDOM from 'react-dom';
import App from './javascript/App';
import GlobalStyle from './javascript/globalStyles';
import {Fragment} from 'react';

ReactDOM.render(<Fragment><GlobalStyle/><App /></Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

