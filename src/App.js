import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ButtonAppBar from './App-bar';
 


import './App.css';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <div>
<ButtonAppBar>
</ButtonAppBar>



     </div>
     </BrowserRouter>
    );
  }
}

export default App;
