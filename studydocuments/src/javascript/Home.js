import React from 'react';
import {Query} from 'react-apollo';
import {HOME_PAGE} from './quries';

const Home = ()=>{
    return (<Query query={HOME_PAGE}>
        {({data, error, loading})=>{
            if(error) return "error";
            if(loading) return "loading";
            console.log(data);
            return "home";
        }}
    </Query>)
} 

export default Home;