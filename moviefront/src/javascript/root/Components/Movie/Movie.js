import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
    width:200px;
    height:300px;
    background-image:url(${props => props.poster});
    background-size: cover;
    background-position:center center;
    border-radius:10px;
    box-shadow: 0 10px 20px 3px #c0c0c0,  0 6px 6px #c0c0c0;
    position:relative;
    margin-bottom:40px;
`;

const Title = styled.div`
    background-color:white;
    padding:5px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19);
    bottom:25px;
    width:auto;
    position:absolute;
    left:0;
    right:0;
    margin: auto;
`;

const Movie = ({ title, id, rating, poster }) => {
    return (
        <Link to={`/detail/${id}`}>
            <Card poster={poster}>
                <Title>
                    {title}/{rating}
                </Title>
            </Card>
        </Link>
    );
}

Movie.prototype = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired
}


export default Movie;