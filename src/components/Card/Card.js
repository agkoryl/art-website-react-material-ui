import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import CardModal from "../CardModal/CardModal";

const styles = {
  card: {
    maxWidth: 345,
    margin: "10px"
  },
  media: {
    objectFit: "cover"
  }
};

class ImgMediaCard extends React.Component {


  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea
        onClick={this.handleOpen}>
          <CardMedia
            component="img"
            alt="Painting"
            className={classes.media}
            height="140"
            image={this.props.image}
            title="Painting"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography component="p">{this.props.text}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <CardModal
            open={this.state.open}
            handleClose={this.handleClose}
            title={this.props.title}
            img={this.props.image}
            fullText={this.props.fullText} />
        </CardActions>
      </Card>
    )
  }
}


export default withStyles(styles)(ImgMediaCard);
