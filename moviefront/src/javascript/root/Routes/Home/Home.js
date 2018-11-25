import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import { HOME_PAGE } from "../../quries/quries";
import Movie from "../../Components/Movie";
import styled from "styled-components";
import gql from "graphql-tag";

const AddMovie = gql`
  mutation addMovies($rating: Float!, $limit: Int!) {
    addMovies(rating: $rating, limit: $limit) {
      title
      rating
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  margin: 0 20px;
  justify-items: center;
  margin-top: 50px;
`;

class Home extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this._onScrollEvent, false);
  }

  limit = 20;
  render() {
    return (
      <Container>
        <Query query={HOME_PAGE} variables={{ rating: 6.0, limit: this.limit }}>
          {({ error, data, loading }) => {
            if (error) return "error";
            if (loading) return "loading";
            this.state = {
              movies: data.getMovies
            };

            return this.state.movies.map(movie => (
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
        <Mutation mutation={AddMovie}>
          {addMovies => {
            this.addMovies = addMovies;
            return null;
          }}
        </Mutation>
      </Container>
    );
  }

  _onScrollEvent = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;
    if (clientHeight + scrollTop === scrollHeight && this.limit < 50) {
      this.limit += 10;
      let { movies } = this.state;
      this.addMovies({
        variables: { rating: 6.0, limit: this.limit }
      })
        .then(response => response.data.addMovies)
        .then(receiveData => {
          console.log(receiveData);
        });
    }
  };
}

export default Home;
