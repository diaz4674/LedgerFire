import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Dropdown from "./Dropdown";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

const BankTypesTable = props => {
  const classes = useStyles();

  const type = type => {
    if (
      (type === 10) |
      (type === 20) |
      (type === 30) |
      (type === 40) |
      (type === 130)
    ) {
      console.log("Variable");
    } else if (
      (type === 50) |
      (type === 60) |
      (type === 70) |
      (type === 80) |
      (type === 90) |
      (type === 100) |
      (type === 110) |
      (type === 120)
    ) {
      console.log("Fixed");
    }
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="center">Expense Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.transactions.map((transaction, i) =>
            transaction.type === "deposit" ? null : (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {transaction.date}
                </TableCell>
                <TableCell align="right">{transaction.name}</TableCell>
                <TableCell align="right">${transaction.amount}</TableCell>
                <TableCell align="center">
                  <Dropdown expenseType={type} />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    transactions: state.BankData.transactions
  };
};

export default withRouter(
  connect(
    mapStateToProps
    //actions to be inputted here
  )(BankTypesTable)
);
