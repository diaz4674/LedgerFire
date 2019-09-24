import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  text: {
    flexWrap: "wrap"
  }
}));
const UnderConstruction = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.text}>
        Something really amazing is coming soon here.
      </h1>
    </>
  );
};

export default UnderConstruction;
