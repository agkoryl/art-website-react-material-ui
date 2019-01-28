import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ButtonAppBar from './App-bar';
import './App.css';
import Home from './Home';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <div>
<ButtonAppBar>
</ButtonAppBar>
<Route path="/" exact component={Home} />
<Route path="/contact" component={Contact} />
<p>The rest of the page</p>

     </div>
     </BrowserRouter>
    );
  }
}

export default App;
