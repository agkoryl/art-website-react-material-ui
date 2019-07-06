import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const styles = {
  iconsContainer: {
    backgroundColor: "#ECE2D0",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
  },
  avatar: {
    margin: 10,
    backgroundColor: "#BAF2BB",
  },
  pinkAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: "#F2BAC9",
  },
  blueAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: "#BAD7F2",
  }
};

function IconAvatars(props) {
  const { classes } = props;
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.iconsContainer}
    >
      <Avatar className={classes.avatar}>
        <a href="mailto:ag.koryl@gmail.com"><i style={{color: "white"}} className="fas fa-at" /></a>
      </Avatar>
      <Avatar className={classes.pinkAvatar}>
        <a href="https://github.com/agkoryl"><i style={{color: "white"}} className="fab fa-github" /></a>
      </Avatar>
      <Avatar className={classes.blueAvatar}>
        <a href="https://www.linkedin.com/in/agnieszka-koryl/"><i style={{color: "white"}} className="fab fa-linkedin-in" /></a>
      </Avatar>
    </Grid>
  );
}

IconAvatars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IconAvatars);
