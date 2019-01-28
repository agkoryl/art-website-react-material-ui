import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ButtonAppBar from './App-bar';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <div>
<ButtonAppBar>
</ButtonAppBar>
<Route path="/" exact component={Home} />
<Route path="/contact" component={Contact} />
<Footer></Footer>

     </div>
     </BrowserRouter>
    );
  }
}

export default App;
