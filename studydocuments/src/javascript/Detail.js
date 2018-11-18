import React from 'react';
import {Query} from 'react-apollo';
import {DETAIL_PAGE} from './quries';

const Detail = ({match:{params:{movieId}}}) =>{
    return (
    <Query query={DETAIL_PAGE(movieId)}>
        {({data, error,loading})=>{
            if(error) return "error Detail.js";
            if(loading) return "loading";
            console.log(data);
            return "detail.js";
        }}
    </Query>)
}

export default Detail;