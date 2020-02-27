import React from "react";
import { Form, Table, Button, Dropdown } from "semantic-ui-react";
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

const income_options = [
  { key: 15, text: "Commission", value: 15 },
  { key: 16, text: "Sales", value: 16 }
];

const expense_options = [
  { key: 1, text: "Inventory", value: 1 },
  { key: 2, text: "Officer's Salaries", value: 2 },
  { key: 3, text: "Payroll", value: 3 },
  { key: 4, text: "Utilities", value: 4 },
  {
    key: 5,
    text: "Dues and Subscriptions",
    value: 5
  },
  { key: 6, text: "Interest", value: 6 },
  { key: 7, text: "Internet", value: 7 },
  { key: 8, text: "Rent", value: 8 },
  { key: 9, text: "Telephone Cell", value: 9 },
  { key: 10, text: "Telephone Land", value: 10 },
  { key: 11, text: "Plumbing", value: 11 },
  { key: 12, text: "Taxes-Local", value: 12 },
  { key: 13, text: "Taxes-Payroll", value: 13 },
  { key: 14, text: "Taxes-Sales", value: 14 }
];

const TableExampleError = props => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    //Component States
    email: "",
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    loading: false
  });

  const change_handler = (event, data, transaction) => {
    console.log(data, event, transaction);
  };

  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Funds Type</Table.HeaderCell>
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
                {transaction.type === "deposit" ? "+" : "-"}$
                {transaction.amount}
              </Table.Cell>
              <Table.Cell>
                {transaction.type === "deposit" ? (
                  <>
                    <Form.Dropdown
                      placeholder="Income Type"
                      fluid
                      selection
                      onChange={change_handler}
                      options={income_options}
                    />
                  </>
                ) : (
                  <>
                    <Form.Dropdown
                      placeholder="Expense Type"
                      fluid
                      selection
                      onChange={change_handler(transaction.name)}
                      options={expense_options}
                    />
                  </>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
          <Button primary>Primary</Button>
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
