import React from "react";
import BankTypesTable from "./BankTypesTable";

const Landing = props => {
  const [data, setData] = React.useState([]);

  const updateData = newData => {
    setData(data => [...data, newData]);
  };
  console.log(data);
  return (
    <>
      <BankTypesTable updateData={updateData} />
    </>
  );
};

export default Landing;
