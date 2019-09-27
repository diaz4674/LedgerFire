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
import Button from "@material-ui/core/Button";
import IncomeDropdown from "./IncomeDropdown";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  table: {
    width: "100%"
    // "@media 700px": {
    //   width: "auto"
    // }
  },
  button: {
    marginTop: "20px",
    backgroundColor: "#0073cf",
    color: "white",
    "&:hover": {
      opacity: 0.7,
      backgroundColor: "#0073cf"
    }
  }
}));

const BankTypesTable = props => {
  const classes = useStyles();
  const [noDupes, setnoDupes] = React.useState([]);

  React.useEffect(() => {
    props.transactions.map((transaction, i) =>
      noDupes.includes(transaction)
        ? null
        : setnoDupes([...noDupes, transaction])
    );
  });

  const type = (type, key) => {
    if (
      (type === 10) |
      (type === 20) |
      (type === 30) |
      (type === 40) |
      (type === 130)
    ) {
      props.updateData({
        date: props.transactions[key].date,
        name: props.transactions[key].name,
        amount: props.transactions[key].amount,
        type: props.transactions[key].type,
        expense: "Variable"
      });
    }
    if (
      (type === 50) |
      (type === 60) |
      (type === 70) |
      (type === 80) |
      (type === 90) |
      (type === 100) |
      (type === 110) |
      (type === 120)
    ) {
      props.updateData({
        date: props.transactions[key].date,
        name: props.transactions[key].name,
        amount: props.transactions[key].amount,
        type: props.transactions[key].type,
        expense: "Fixed"
      });
    }
    if ((type === 150) | (type === 160)) {
      props.updateData({
        date: props.transactions[key].date,
        name: props.transactions[key].name,
        amount: props.transactions[key].amount,
        type: props.transactions[key].type,
        expense: "Fixed"
      });
    }
  };
  return (
    <Paper>
      <h3> Please select what type of expenses these.</h3>
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
            {noDupes.map((transaction, i) => (
              // transaction.type === "deposit" ? null :
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {transaction.date}
                </TableCell>
                <TableCell align="right">{transaction.name}</TableCell>
                <TableCell align="right">${transaction.amount}</TableCell>
                <TableCell align="center">
                  {transaction.type === "deposit" ? (
                    <IncomeDropdown expenseType={type} transactionKey={i} />
                  ) : (
                    <Dropdown expenseType={type} transactionKey={i} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
          onClick={props.sendData}
          variant="contained"
          className={classes.button}
        >
          Update
        </Button>
      </Paper>
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
