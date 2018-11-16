import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './quries';

const Home = () => (
    <Query query={HOME_PAGE}>
        {({ data, error, loading }) => {
            if (error) return <span>something error</span>
            if (loading) return <span>loading</span>

            return data.getMovies.map(movie => {
                return (
                <h2 key={movie.id}>
                    {movie.title} / {movie.rating}
                </h2>)
            });

        }}
    </Query>);

export default Home;