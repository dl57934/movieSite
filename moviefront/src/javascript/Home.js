import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './quries';
import Movie from './Movie';
import styled from 'styled-components';


const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(3, 0.7fr);
    flex:wrap;
    justify-items:center;
`;


const Home = () => (
    <Container>
        <Query query={HOME_PAGE}>
            {({ error, data, loading }) => {
                if (error) return <h1>Error !!</h1>
                if (loading) return <h2>loading</h2>
                return data.getMovies.map(movie =>
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        poster={movie.medium_cover_image}
                        rating={movie.rating}
                        title={movie.title}
                    />);
            }}
        </Query>
    </Container>
)
export default Home;