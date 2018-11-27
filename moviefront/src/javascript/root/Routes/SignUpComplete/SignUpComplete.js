import React from "react";
import styled from "styled-components";

const SignUpComplete = () => {
  return (
    <Container>
      <Title>아래의 사이트에 접속하여 이메일 인증을 해주세요</Title>
      <ToPknu href="http://mail.pukyong.ac.kr/main/main.jsp" target="_blank">
        부경대학교 메일 사이트
      </ToPknu>
    </Container>
  );
};

const Container = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 600px;
`;

const Title = styled.h1`
  font-size: 30px;
`;

const ToPknu = styled.a`
  margin-top: 50px;
  font-size: 20px;
  :hover {
    color: skyblue;
  }
`;

export default SignUpComplete;
