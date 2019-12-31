import React from "react";
import { Icon, Table, Dropdown } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
const useStyles = makeStyles(theme => ({
  blue: {
    color: "#3390C5",
    fontWeight: "bold"
  },
  red: {
    color: "red",
    fontWeight: "bold"
  }
}));

const getOptions = [
  { key: "edit", text: "Edit Post", value: "edit" },
  { key: "delete", text: "Remove Post", value: "delete" },
  { key: "hide", text: "Hide Post", value: "hide" },
  { key: "edit", text: "Edit Post", value: "edit" },
  { key: "delete", text: "Remove Post", value: "delete" },
  { key: "hide", text: "Hide Post", value: "hide" },
  { key: "edit", text: "Edit Post", value: "edit" },
  { key: "delete", text: "Remove Post", value: "delete" },
  { key: "hide", text: "Hide Post", value: "hide" }
];

const TableExampleError = props => {
  const classes = useStyles();
  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Expense</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.transactions.map((transaction, i) => (
            <Table.Row>
              <Table.Cell>{transaction.date}</Table.Cell>
              <Table.Cell>{transaction.name}</Table.Cell>
              <Table.Cell
                className={
                  transaction.type === "deposit" ? classes.blue : classes.red
                }
              >
                {" "}
                {transaction.type === "deposit" ? "+" : "-"}$
                {transaction.amount}
              </Table.Cell>
              <Table.Cell>
                <Dropdown
                  placeholder="Select Expense Type"
                  scrolling
                  closeOnEscape
                  options={getOptions}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
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
  )(TableExampleError)
);
