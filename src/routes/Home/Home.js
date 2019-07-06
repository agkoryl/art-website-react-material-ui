import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import "./Home.css";

import ImgMediaCard from "../../components/Card/Card";
import ImageGridList from "../../components/ImageGrid/ImageGrid";
import PaperSheet from "../../components/TextField/TextField";
import painting from "../../assets/img/painting.jpg";
import sketch from "../../assets/img/sketch.jpg";
import origami from "../../assets/img/origami.jpeg";
import embroidery from "../../assets/img/embroidery.jpg";


const styles = (theme) => ({
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '20px',
    marginTop: '30px',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '30px',
      paddingRight: '30px'
    },
  },
  
});

class Home extends React.Component {


  render() {

    const { classes } = this.props;

    return (
      <main>
        <Grid container className={classes.contentContainer}>
          <Grid item xs={12} md={6}>
            <ImageGridList />
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <PaperSheet />
          </Grid>
        </Grid>

        <Grid container className="cards-display">
          <Grid item xs={12} sm={6} md={3} className="card-item">
            {" "}
            <ImgMediaCard
              image={painting}
              title="Oil painting"
              text="Oil painting is the process ..."
              fullText="Oil painting is the process of painting with pigments with a medium of drying oil as the binder. Commonly used drying oils include linseed oil, poppy seed oil, walnut oil, and safflower oil. The choice of oil imparts a range of properties to the oil paint, such as the amount of yellowing or drying time. Certain differences, depending on the oil, are also visible in the sheen of the paints. An artist might use several different oils in the same painting depending on specific pigments and effects desired. The paints themselves also develop a particular consistency depending on the medium. The oil may be boiled with a resin, such as pine resin or frankincense, to create a varnish prized for its body and gloss. "
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="card-item">
            {" "}
            <ImgMediaCard
              image={origami}
              title="Origami"
              text=" Origami is the art of..."
              fullText="Origami is the art of paper folding, which is often associated with Japanese culture. In modern usage, the word 'origami' is used as an inclusive term for all folding practices, regardless of their culture of origin. The goal is to transform a flat square sheet of paper into a finished sculpture through folding and sculpting techniques. Modern origami practitioners generally discourage the use of cuts, glue, or markings on the paper. Origami folders often use the Japanese word kirigami to refer to designs which use cuts, although cutting is more characteristic of Chinese papercrafts."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="card-item">
            {" "}
            <ImgMediaCard
              image={sketch}
              title="Sketching"
              text="A sketch  is a rapidly... "
              fullText="A sketch is a rapidly executed freehand drawing that is not usually intended as a finished work. A sketch may serve a number of purposes: it might record something that the artist sees, it might record or develop an idea for later use or it might be used as a quick way of graphically demonstrating an image, idea or principle."
            />
          </Grid>
          <Grid item xs={12}  sm={6} md={3} className="card-item">
            {" "}
            <ImgMediaCard
              image={embroidery}
              title="Embroidery"
              text="Embroidery is the craft... "
              fullText="Embroidery is the craft of decorating fabric or other materials using a needle to apply thread or yarn.
              Embroidery may also incorporate other materials such as pearls, beads, quills, and sequins. In modern days, embroidery is usually seen on caps, hats, coats, blankets, dress shirts, denim, dresses, stockings, and golf shirts. Embroidery is available with a wide variety of thread or yarn color.
              Some of the basic techniques or stitches of the earliest embroidery are chain stitch, buttonhole or blanket stitch, running stitch, satin stitch, cross stitch. Those stitches remain the fundamental techniques of hand embroidery today."
            />
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default withStyles(styles)(Home);
