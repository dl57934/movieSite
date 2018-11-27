import React from "react";
import { EMAIL_CHECK } from "./EmailQuries";
import { Query } from "react-apollo";
import LoadingContainer from "../../Components/Loading";

const EmailCheck = ({
  match: {
    params: { token }
  },
  history: { push }
}) => {
  return (
    <Query query={EMAIL_CHECK} variables={{ token: Number(token) }}>
      {({ data: { getTokenCheck } }, loading) => {
        const result = getTokenCheck;
        if (loading)
          return (
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
          );

        if (result) {
          alert("회원가입이 완료되었습니다.");
          push("/home/1");
        }
        return <div />;
        // if (getTokenCheck) {
        //   console.log(getTokenCheck);
        //   return <div />;
        // } else {
        //   console.log(getTokenCheck);
        //   return <div />;
        // }
      }}
    </Query>
  );
};

export default EmailCheck;
