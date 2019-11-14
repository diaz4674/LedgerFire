import React from "react";
import { withRouter } from "react-router";

const ValidateUser = props => {
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      props.history.push("/Dashboard");
    } else {
      props.history.push("/login");
    }
  }, []);
  return <></>;
};

export default withRouter(ValidateUser);
