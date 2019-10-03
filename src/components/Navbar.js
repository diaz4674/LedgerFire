import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  nav: {
    padding: "0 15px",
    backgroundColor: "#1976d2",
    boxShadow: " 0px 3px 2px 2px rgba(0,0,0,.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "45px"
  },
  loginButton: {
    backgroundColor: "#0c233e",
    color: "white",
    transition: ".5s ease",
    "&:hover": {
      backgroundColor: "white",
      color: "black"
    }
  },
  registerButton: {
    backgroundColor: "#0c233e",
    color: "white",
    transition: ".5s ease",
    "&:hover": {
      backgroundColor: "white",
      color: "black"
    }
  },
  logoutButton: {
    backgroundColor: "#0c233e",
    color: "white",
    transition: ".5s ease",
    "&:hover": {
      backgroundColor: "#5b5f66",
      color: "white"
    }
  },
  title: {
    color: "white",
    cursor: "pointer"
  },
  leftNav: {
    display: "flex",
    alignItems: "center"
  },
  rightNav: {
    display: "flex"
  },
  rightButtons: {
    margin: "0 5px"
  },
  dashboardNav: {
    padding: "0 15px",
    margin: "o auto"
  },
  text: {
    display: "flex",
    alignItems: "center",
    margin: "o auto",
    color: "white",
    fontSize: "1rem",
    "&:hover": {
      cursor: "pointer"
    }
  },
  options: {
    display: "flex",
    alignItems: "center",
    padding: "0 15px"
  },
  subMenu: {
    position: "absolute",
    backgroundColor: "#f9f9f9",
    minWidth: "160px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    margin: "0",
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "0",
    cursor: "pointer",
    overflow: "hidden",
    zIndex: "1"
  },
  subText: {
    display: "flex",
    padding: "12px 16px",
    width: "100%",
    textTransform: "uppercase",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: ".75rem",
    "&:hover": {
      backgroundColor: "#E9E9E9",
      color: "#0073cf"
    }
    // margin: "12px 16px"
  }
}));

const NavBar = props => {
  const classes = useStyles();
  const [isauth, setisauth] = useState(true);
  const [isOpen, updateIsOpen] = useState(false);
  const [projectionsOpen, updateProjectionsOpen] = useState(false);
  React.useEffect(() => {
    // if (localStorage.getItem("token") === true) {
    //   setisauth(!isauth);
    // }
  }, []);

  const toggleNav = () => {
    // console.log('hi')
    setisauth(!isauth);
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

  const navigate = route => {
    props.history.push(route);
  };

  return (
    <div>
      <nav className={classes.nav}>
        {/* <Link to="/"> <Logo src = {} </Link> */}
        <div className={classes.leftNav}>
          <h1 className={classes.title} onClick={() => navigate("/")}>
            Ledgerfire
          </h1>
          {isauth ? (
            <div className={classes.options}>
              <div
                className={classes.dashboardNav}
                onMouseOver={() => updateIsOpen(true)}
                onFocus={() => updateIsOpen(true)}
                onMouseLeave={() => updateIsOpen(false)}
                onBlur={() => updateIsOpen(false)}
                toggle={() => updateIsOpen(!projectionsOpen)}
                isOpen={isOpen}
              >
                <h3 className={classes.text}>Dashboard</h3>
                {isOpen ? (
                  <ul className={classes.subMenu}>
                    <li
                      className={classes.subText}
                      onClick={() => navigate("/")}
                    >
                      Breakeven
                    </li>
                    <li
                      className={classes.subText}
                      onClick={() => navigate("/construction")}
                    >
                      Officer Salary
                    </li>
                    <li
                      className={classes.subText}
                      onClick={() => navigate("/construction")}
                    >
                      Financial Growth
                    </li>
                  </ul>
                ) : null}
              </div>
              <div
                className={classes.dashboardNav}
                onMouseOver={() => updateProjectionsOpen(true)}
                onFocus={() => updateProjectionsOpen(true)}
                onMouseLeave={() => updateProjectionsOpen(false)}
                onBlur={() => updateProjectionsOpen(false)}
                toggle={() => updateProjectionsOpen(!isOpen)}
                isOpen={isOpen}
              >
                <h3 className={classes.text}>Projections</h3>
                {projectionsOpen ? (
                  <ul className={classes.subMenu}>
                    <li
                      className={classes.subText}
                      onClick={() => navigate("/construction")}
                    >
                      Hire An Employee
                    </li>
                    <li
                      className={classes.subText}
                      onClick={() => navigate("/construction")}
                    >
                      Purchase Equipment
                    </li>
                    <li
                      className={classes.subText}
                      onClick={() => navigate("/construction")}
                    >
                      Purchase Real Estate
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>

        {isauth ? (
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
        ) : (
          <div className={classes.rightNav}>
            <div className={classes.rightButtons}>
              <Button
                variant="contained"
                size="medium"
                className={classes.loginButton}
                onClick={e => loginHandler()}
              >
                Login
              </Button>
            </div>
            <div className={classes.rightButtons}>
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
        )}
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
