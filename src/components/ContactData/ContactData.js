import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  avatar: {
    marginRight: '15px'
  }
});

function ContactData(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem>
        <Avatar className={classes.avatar}>
          <i className="fas fa-at" />
        </Avatar>
        <ListItemText primary="e-mail" secondary="ag.koryl@gmail.com" />
      </ListItem>
      <ListItem>
        <Avatar className={classes.avatar}>
          <i className="fas fa-map-marker-alt" />
        </Avatar>
        <ListItemText primary="adress" secondary="xxxxx 190/20" />
      </ListItem>
      <ListItem>
        <Avatar className={classes.avatar}>
          <i className="fas fa-phone" />
        </Avatar>
        <ListItemText primary="phone" secondary="+48 222 333 555" />
      </ListItem>
    </List>
  );
}

ContactData.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactData);
