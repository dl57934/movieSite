import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "../../quries/quries";
import Movie from "../../Components/Movie";
import styled from "styled-components";
import { LoadingContainer } from "../../../globalStyles";
import Footer from "./Footer";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  margin: 0 20px;
  justify-items: center;
  margin-top: 50px;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { page }
      }
    } = props;
    this.page = page;
    window.onscroll = () => {
      this._onScrollEvent();
    };
    this.state = {
      moviesCheck: false
    };
  }
  movies = [];
  limit = 20;
  render() {
    return (
      <Fragment>
        <Container>
          {this.state.moviesCheck ? (
            this.movies
              .slice(0, this.limit)
              .map(movie => (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  poster={movie.medium_cover_image}
                  id={movie.id}
                  rating={movie.rating}
                />
              ))
          ) : (
            <Query
              query={HOME_PAGE}
              variables={{
                rating: 6.0,
                limit: 50,
                page: Number(this.page)
              }}
            >
              {({ error, data, loading }) => {
                if (error) return "error";
                if (loading)
                  return (
                    <Fragment>
                      <div />
                      <LoadingContainer>
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                      </LoadingContainer>
                    </Fragment>
                  );
                this.movies = data.getMovies;
                return this.movies
                  .slice(0, 20)
                  .map(movie => (
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
          )}
        </Container>
        <Footer page={this.page} history={this.props.history} />
      </Fragment>
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
      this.setState({
        moviesCheck: true
      });
    }
  };
}

export default Home;
