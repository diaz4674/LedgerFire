import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const CustomizedSelects = props => {
  const classes = useStyles();
  const [expenseName, setexpenseName] = React.useState("");
  const [expenseType, setexpenseType] = React.useState("");

  const handleChange = async event => {
    setexpenseName(event.target.value);
    props.expenseType(event.target.value);
  };

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="expense-type">Type</InputLabel>
        <Select
          value={expenseName}
          onChange={handleChange}
          input={
            <BootstrapInput name={expenseType} id="expense-customized-select" />
          }
        >
          {/* <MenuItem value="" /> */}
          <MenuItem value={10}>Inventory</MenuItem>
          <MenuItem value={20} selected="Variable">
            Officer's Salaries
          </MenuItem>
          <MenuItem value={30} selected="Variable">
            Payroll
          </MenuItem>
          <MenuItem value={40} type="Variable">
            Utilities
          </MenuItem>
          <MenuItem value={50} type="Fixed">
            Dues and Subscriptions
          </MenuItem>
          <MenuItem value={60} type="Fixed">
            Interest
          </MenuItem>
          <MenuItem value={70} type="Fixed">
            Internet
          </MenuItem>
          <MenuItem value={80} type="Fixed">
            Rent
          </MenuItem>
          <MenuItem value={90} type="Fixed">
            Telephone Cell
          </MenuItem>
          <MenuItem value={100} type="Fixed">
            Telephone Land
          </MenuItem>
          <MenuItem value={110} type="Fixed">
            Taxes-Local
          </MenuItem>
          <MenuItem value={120} type="Fixed">
            Taxes-Payroll
          </MenuItem>
          <MenuItem value={130} type="Variable">
            Taxes-Sales
          </MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};

export default CustomizedSelects;
