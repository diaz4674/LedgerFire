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
    maxWidth: "60%",
    margin: "25px auto",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  img: {
    minWidth: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

const AlertUpdate = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Alert"
          height=""
          className={classes.img}
          image="https://i0.wp.com/morrisseytravel.com/wp-content/uploads/2017/03/alert-icon.png?fit=288%2C288&ssl=1"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Update some data
          </Typography>
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
