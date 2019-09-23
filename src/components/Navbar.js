import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  nav: {
    padding: "15px 0",
    backgroundColor: "#0073cf",
    boxShadow: " 0px 3px 2px 2px rgba(0,0,0,.1)"
  },
  loginButton: {
    backgroundColor: "#0073cf",
    color: "white",
    "&:hover": {
      backgroundColor: "#0c233e"
    }
  },
  registerButton: {
    backgroundColor: "#0c233e",
    color: "white",
    "&:hover": {
      backgroundColor: "#0073cf"
    }
  },
  rightNav: {
    display: "flex"
  }
}));

const NavBar = props => {
  const classes = useStyles();
  const [state, setState] = useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("token") === true) {
      setState(!state);
    }
  }, []);

  const toggleNav = () => {
    // console.log('hi')
    setState(!state);
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };

  const loginHandler = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  const registerHandler = () => {
    localStorage.removeItem("token");
    props.history.push("/register");
  };

  return (
    <div>
      <nav className={classes.nav}>
        {/* <Link to="/"> <Logo src = {} </Link> */}
        <div>
          {state ? (
            <div className={classes.rightNav}>
              <div>
                <Button
                  variant="contained"
                  size="medium"
                  className={classes.loginButton}
                  onClick={e => loginHandler()}
                >
                  Login
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  size="medium"
                  className={classes.registerButton}
                  onClick={e => registerHandler()}
                >
                  Register
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <Button
                variant="contained"
                size="medium"
                className={classes.logoutButton}
                onClick={toggleNav}
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(NavBar)
);
