import React from "react";
import BankTypesTable from "./BankTypesTable";

const Landing = props => {
  const [data, setData] = React.useState([]);

  const updateData = async newData => {
    if (data.length > 0) {
      if (data.some(o => o.name === newData.name)) {
        data.find(o => o.name === newData.name).expense = newData.expense;
        console.log(data);
      } else {
        setData(data => [...data, newData]);
      }
    } else {
      setData(data => [...data, newData]);
    }
  };

  const sendData = e => {
    console.log(data);
  };

  return (
    <>
      <BankTypesTable updateData={updateData} sendData={sendData} />
    </>
  );
};

export default Landing;
