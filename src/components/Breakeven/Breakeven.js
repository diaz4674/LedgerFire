import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import BreakevenGraph from "./BreakevenGraph";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const Breakeven = () => {
  const classes = useStyles();
  const [variable, setVariable] = React.useState(130);
  const [fixed, setFixed] = React.useState(25);

  return (
    <div>
      <Paper className={classes.root}>
        <BreakevenGraph variable={variable} fixed={fixed} />
      </Paper>
    </div>
  );
};

export default Breakeven;
