import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconAvatars from "./Icon";
import Grid from "@material-ui/core/Grid";

const styles = {
    footer: {
        margin: "10px 0"
    },
  footerDate: {
    fontSize: "16px",
    textAlign: "center",
    padding: "5px",
  }
};

function Footer(props) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <IconAvatars />
        </Grid>
        <Grid item xs={12} className={classes.footerDate}>
          2019
        </Grid>
      </Grid>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
