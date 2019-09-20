import React from "react";
import BankTypesTable from "./BankTypesTable";

const Landing = props => {
  const [data, setData] = React.useState([]);
  const [activate, setactivate] = React.useState(1);

  let add = () => {
    setactivate(1);
  };
  const updateData = async newData => {
    let check = null;

    if (data.length > 0) {
      await data.map(same => {
        same.name === newData.name ? (check = true) : (check = false);

        if (same.name !== newData.name) {
          add();
          activate === 1 ? setData(data => [...data, newData]) : null;
          activate(0);
        } else if (same.name === newData.name) {
          console.log("same");
          //  data.indexOf(function(name) {
          //   console.log("index");
          // });
          // data.map(thisData => thisData.find(o => o.id === newData.id) || thisData);
        }
      });
    } else {
      setData(data => [...data, newData]);
    }
  };

  console.log(data);
  return (
    <>
      <BankTypesTable updateData={updateData} />
    </>
  );
};

export default Landing;
