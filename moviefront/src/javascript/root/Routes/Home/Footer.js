import React, { Component } from "react";
import styled from "styled-components";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.page = props.page;
    this.push = props.history.push;
  }
  render() {
    return (
      <Container>
        {[-1, 0, 1].map(i => {
          const page = Number(this.page) + i;
          if (page > 0)
            return (
              <LinkInner key={page} href={`/home/${page}`}>
                {page}
              </LinkInner>
            );
          else if (page === this.page) return page;
        })}
      </Container>
    );
  }
  _onClickPush = () => {};
}

const Container = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const LinkInner = styled.a`
  text-decoration: none;
  margin-right: 20px;
  font-size: 23px;
`;
