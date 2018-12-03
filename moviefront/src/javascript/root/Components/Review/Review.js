import React, { Fragment } from "react";
import styled from "styled-components";
import { white } from "ansi-colors";

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 40px;
`;

const Line = styled.hr`
  margin-bottom: 40px;
  color: white;
`;

const Text = styled.p`
  color: white;
  font-size: 25px;
  margin-left: 80px;
`;

const Header = styled.p`
  color: white;
`;

const Birth = styled.h3`
  color: white;
  margin-left: 80%;
`;

const Review = ({ text, birth, movieId }) => (
  <Fragment>
    <ReviewContainer>
      <Header>{movieId}</Header>
      <br />
      <Text>{text}</Text>
      <Birth>{birth}</Birth>
    </ReviewContainer>
    <Line />
  </Fragment>
);

export default Review;
