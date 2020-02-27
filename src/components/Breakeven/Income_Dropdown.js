import React from "react";
import { Form, Table, Button, Dropdown } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

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

const Income_dropdown = props => {
  const change_handler = data => {
    console.log(data, props);
  };
  return (
    <>
      <Form.Dropdown
        placeholder="Income Type"
        fluid
        selection
        onChange={change_handler}
        options={income_options}
      />
    </>
  );
};

export default Income_dropdown;
