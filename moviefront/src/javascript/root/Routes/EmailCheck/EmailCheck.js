import React, { Fragment } from "react";
import { EMAIL_CHECK } from "./EmailQuries";
import { Query } from "react-apollo";
import LoadingContainer from "../../Components/Loading";

const EmailCheck = ({
  match: {
    params: { token }
  },
  history: { push }
}) => {
  console.log(token);
  return (
    <Query query={EMAIL_CHECK} variables={{ token: Number(token) }}>
      {({ error, data, loading }) => {
        if (loading)
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

        const getTokenCheck = data.getTokenCheck;
        if (getTokenCheck) {
          const { result, message } = getTokenCheck;
          if (result) {
            alert(message);
            push("/home/1");
          } else {
            alert(message);
            push("/login");
          }
        }
        return <div />;
      }}
    </Query>
  );
};

export default EmailCheck;
