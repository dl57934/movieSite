import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 200px;
  margin-bottom: 40px;
  position: relative;
`;
const Title = styled.span`
  background-color: white;
  width: auto;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
   margin: auto;
`;

const Movie = ({ title, id, poster, rating }) => {
    return (<Link to={`/detail/${id}`}>
        <Card background={poster}>
            <Title>
                {title}/{rating}⭐️
            </Title>
        </Card>
    </Link>)
}

Movie.protoTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
}

export default Movie;