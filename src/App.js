import React, { Component } from 'react';

import Home from './components/Home';
import TaggedCategories from './components/TaggedCategories'; 
import './assets/css/App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Home />
        <TaggedCategories />        
      </div>
    );
  }
}

export default App;