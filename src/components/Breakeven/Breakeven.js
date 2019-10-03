import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BreakevenGraph from "./BreakevenGraph";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    width: "400px",
    padding: theme.spacing(3, 2),
    margin: " auto"
  },
  number: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1976d2",
    margin: "0"
  },
  Breakeven: {
    margin: "0",
    color: "#1976d2",
    fontSize: "18px",
    fontWeight: "700"
  },
  viewMore: {
    margin: "10px 0",
    backgroundColor: "#0c233e",
    color: "white",
    transition: ".5s ease",
    "&:hover": {
      backgroundColor: "light-gray",
      color: "black"
    }
  }
}));

const Breakeven = () => {
  const classes = useStyles();
  const [variable, setVariable] = React.useState(130);
  const [fixed, setFixed] = React.useState(25);
  const [breakeven, setbreakeven] = React.useState({ number: "$500,000" });

  return (
    <Paper className={classes.root}>
      <BreakevenGraph variable={variable} fixed={fixed} />
      <div>
        <h4 className={classes.Breakeven}> Breakeven </h4>
        <p className={classes.number}> {breakeven.number} </p>
      </div>
      <Button
        variant="contained"
        size="medium"
        className={classes.viewMore}
        onClick={e => viewMore()}
      >
        View More
      </Button>
    </Paper>
  );
};

export default Breakeven;
