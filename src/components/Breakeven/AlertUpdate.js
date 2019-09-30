import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router";

const useStyles = makeStyles({
  card: {
    width: "60%",
    margin: "25px auto",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    margin: "o auto",
    display: "flex",
    justifyContent: "center",
    width: "5rem",
    padding: "10px"
  }
});

const AlertUpdate = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <div className={classes.titleContainer}>
            <img
              component="img"
              alt="Alert"
              className={classes.img}
              src="https://www.jacaranda.com.au/wp-content/uploads/2016/02/monitorNEW.jpg"
            />
            <Typography gutterBottom variant="h5" component="h2">
              Update some data
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            In order to crunch our numbers to provide you the most accurate
            numbers, please update some information.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => props.history.push("/verifyexpenses")}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default withRouter(AlertUpdate);
