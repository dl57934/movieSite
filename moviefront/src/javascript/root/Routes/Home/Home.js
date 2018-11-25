import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "../../quries/quries";
import Movie from "../../Components/Movie";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  margin: 0 20px;
  justify-items: center;
  margin-top: 50px;
`;

const Home = () => {
  return (
    <Container>
      <Query query={HOME_PAGE}>
        {({ error, data, loading }) => {
          if (error) return "error";
          if (loading) return "loading";
          return data.getMovies.map(movie => (
            <Movie
              key={movie.id}
              title={movie.title}
              poster={movie.medium_cover_image}
              id={movie.id}
              rating={movie.rating}
            />
          ));
        }}
      </Query>
    </Container>
  );
};

export default Home;
