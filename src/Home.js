import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Home.css";

import ImgMediaCard from "./Card";
import ImageGridList from "./Image-grid";
import PaperSheet from "./Textfield";

class Home extends React.Component {
  render() {
    return (
      <main>
        <article className="home-display">
          <ImgMediaCard />
          <ImgMediaCard />
          <ImgMediaCard />
        </article>
        <Grid container className="images-container">
        <Grid item xs={12} md={6}>
        <ImageGridList /></Grid>
        <Grid item xs={12} md={6}>   <PaperSheet /></Grid>
        </Grid>
      </main>
    );
  }
}

export default Home;
