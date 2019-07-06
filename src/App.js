import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ButtonAppBar from "./components/AppBar/AppBar";
import "./App.scss";
import Home from "./routes/Home/Home";
import Contact from "./routes/Contact/Contact";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="page-container">
        <div className="content-wrap">
        <ButtonAppBar />
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
