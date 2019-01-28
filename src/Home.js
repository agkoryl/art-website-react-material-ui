import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Home.css";

import ImgMediaCard from "./Card";
import ImageGridList from "./Image-grid";
import PaperSheet from "./Textfield";
import painting from "./img/painting.jpg";
import sketch from "./img/sketch.jpg";
import origami from "./img/origami.jpeg";

class Home extends React.Component {
  render() {
    return (
      <main>
        <Grid container className="home-display">
          <Grid item xs={12} md={3}>
            {" "}
            <ImgMediaCard
              image={painting}
              title="Oil painting"
              text="Oil painting is the process ..."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            {" "}
            <ImgMediaCard
              image={origami}
              title="Origami"
              text=" is the art of paper folding..."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            {" "}
            <ImgMediaCard
              image={sketch}
              title="Sketching"
              text="A sketch  is a rapidly executed... "
            />
          </Grid>
        </Grid>

        <Grid container className="images-container">
          <Grid item xs={12} md={6}>
            <ImageGridList />
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <PaperSheet />
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default Home;
