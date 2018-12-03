import React, { Fragment, Component } from "react";
import { Query, Mutation } from "react-apollo";
import { DETAIL_PAGE, ADD_REVIEW } from "./detailQuries";
import Movie from "../../Components/Movie";
import Review from "../../Components/Review";
import styled from "styled-components";
import LoadingContainer from "../../Components/Loading";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  justify-content: center;
  margin: 0 20px;
`;

const CustomLoading = styled(LoadingContainer)`
  margin-left: 800px;
`;

const Image = styled.div`
  box-shadow: 0 10px 20px 3px #c0c0c0, 0 6px 6px #c0c0c0;
  background-color: white;
  border-radius: 7px;
  margin-right: 60px;
`;

const InputReviewContainer = styled.div`
  display: flex;
  justify-content: center;
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

const ReviewCompleteButton = styled.button`
  border-radius: 10px;
  margin: 80px 0 0 30px;
  width: 120px;
  height: 60px;
  font-size: 15px;
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
  margin-left: 10%;
  margin-bottom: 50px;
`;

const Line = styled.hr`
  margin-bottom: 40px;
`;

const TextArea = styled.textarea`
  border-radius: 5px;
  width: 60%;
  height: 130px;
  font-size: 15px;
  margin-bottom: 40px;
`;

class Detail extends Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { movieId }
      }
    } = props;
    this.movieId = movieId;
  }

  render() {
    return (
      <Query query={DETAIL_PAGE(this.movieId)}>
        {({ loading, data, error }) => {
          if (error) return error;
          if (loading)
            return (
              <CustomLoading>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </CustomLoading>
            );
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
              <SuggestionName>리뷰</SuggestionName>
              <Line />
              {localStorage.getItem("jwt") ? (
                <InputReviewContainer>
                  <TextArea id="review" />
                  <Mutation mutation={ADD_REVIEW}>
                    {addReview => {
                      this.addReview = addReview;
                      return (
                        <ReviewCompleteButton onClick={this._setReviewEvent}>
                          등록하기
                        </ReviewCompleteButton>
                      );
                    }}
                  </Mutation>
                </InputReviewContainer>
              ) : null}
              <Line />
              {data.getReviews.map(review => (
                <Review
                  movieId={review.movieId}
                  birth={review.birth}
                  text={review.text}
                />
              ))}
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
  }
  _setReviewEvent = async () => {
    const text = document.getElementById("review").value;
    const token = localStorage.getItem("jwt");
    const movieId = this.movieId;
    const result = await this.addReview({
      variables: { text, token, movieId }
    });
    if (result) window.location.reload();
    else {
      localStorage.removeItem("jwt");
      alert("다시로그인 해주세요");
    }
  };
}

export default Detail;
