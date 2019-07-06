import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import brushes from "../../assets/img/brush.jpg";
import abstractPainting from "../../assets/img/abstract-painting.jpg";
import galleryPainting from "../../assets/img/gallery-painting.jpg";
import housesPaiting from "../../assets/img/houses-painting.jpeg";
import wallPaiting from "../../assets/img/wall-painting.jpg";
import boatPainting from "../../assets/img/boat-painting.jpeg";

const styles = theme => ({
  root: {
    display: "flex",
    flexBasis: "50%",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    height: 450,
  }
});

const tileData = [
  {
    img: brushes,
    title: "Image",
    author: "author",
    cols: 2
  },
  {
    img: abstractPainting,
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: galleryPainting,
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: housesPaiting,
    title: "Image",
    author: "author",
    cols: 2
  },
  {
    img: wallPaiting,
    title: "Image",
    author: "author",
    cols: 2
  },
  {
    img: boatPainting,
    title: "Image",
    author: "author",
    cols: 1
  }
];

function ImageGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root} >
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageGridList);
