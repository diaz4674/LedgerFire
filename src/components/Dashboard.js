import React from "react";
import Breakeven from "./Breakeven/Breakeven";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AlertUpdate from "./Breakeven/AlertUpdate";

const Dashboard = props => {
  const [data, setData] = React.useState([]);

  const updateData = async newData => {
    if (data.length > 0) {
      if (data.some(o => o.name === newData.name)) {
        //when connected to backend, check for ID not name. There may be multiple same name expenses.
        data.find(o => o.name === newData.name).expense = newData.expense;
        console.log(data);
      } else {
        setData(data => [...data, newData]);
      }
    } else {
      setData(data => [...data, newData]);
    }
  };

  const sendData = async e => {
    let filtered = [];
    await props.transactions.map(expense => {
      // return expense.type !== "deposit" ?
      filtered.push(expense);
      //  : null;
    });
    console.log(filtered.length + "and data is" + data.length);
    data.length === filtered.length
      ? console.log("sent successul")
      : console.log("please select type of expense");
  };

  return <>{props.transactions.length > 0 ? <AlertUpdate /> : <Breakeven />}</>;
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
  )(Dashboard)
);
