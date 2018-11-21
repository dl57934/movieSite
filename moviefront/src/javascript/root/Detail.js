import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { DETAIL_PAGE } from "../quries";
import Movie from "./Movie";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  justify-items: center;
  margin: 0 20px;
`;

const Image = styled.div`
  box-shadow: 0 10px 20px 3px #c0c0c0, 0 6px 6px #c0c0c0;
  background-color: white;
  border-radius: 7px;
  margin-right: 30px;
`;

const Paragraph = styled.span`
  margin-bottom: 15px;
  display: block;
  font-weight: ${props => (props.bold ? "500" : "400")};
  color: whitesmoke;
  text-decoration: ${props => (props.removeUnderLine ? "none" : "")};
  :hover {
    color: ${props => (props.a ? "gold" : "")};
  }
`;

const SuggestionName = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  color: white;
  font-weight: 600;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 24px;
  color: white;
`;

const Second = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-bottom: 50px;
`;

const Line = styled.hr`
  margin-bottom: 40px;
`;

const Detail = ({
  match: {
    params: { movieId }
  }
}) => {
  return (
    <Query query={DETAIL_PAGE(movieId)}>
      {({ loading, data, error }) => {
        if (error) return error;
        if (loading) return "loading";
        const detailMovie = data.getDetailMovie;
        return (
          <Fragment>
            <SuggestionName>영화 상세 정보</SuggestionName>
            <Second>
              <Image as={"img"} src={detailMovie.medium_cover_image} />
              <span>
                <Title>{detailMovie.title}</Title>
                <Paragraph>
                  장르 {detailMovie.genres.map(genre => ` ${genre} `)}
                </Paragraph>
                <Paragraph bold>점수: {detailMovie.rating}</Paragraph>
                <Paragraph>줄거리: {detailMovie.description_full}</Paragraph>
                {detailMovie.torrents.map(torrent => (
                  <Paragraph removeUnderLine a as="a" href={torrent.url}>
                    다운로드 by Torrent({torrent.size}) {torrent.quality}{" "}
                  </Paragraph>
                ))}
              </span>
            </Second>
            <SuggestionName>추천영화</SuggestionName>
            <Line />
            <Container>
              {data.getSuggestionMovie.map(movie => (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  poster={movie.medium_cover_image}
                  id={movie.id}
                  rating={movie.rating}
                />
              ))}
            </Container>
          </Fragment>
        );
      }}
    </Query>
  );
};

export default Detail;
