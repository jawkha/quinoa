import React, { Component } from 'react';
import axios from 'axios';

import Home from './components/Home';
import TaggedCategories from './components/TaggedCategories'; 
import './assets/css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        tags: [],
        tagMatches: [],
        activeTag: ""
    };
    this.findTaggedCategories = this.findTaggedCategories.bind(this);
  }

   //   GET REQUEST --- 
   componentDidMount() {
    axios.get("/home").then(res => {
      console.log(res.data);
      const tags = res.data;
      this.setState({ tags: tags });
    });
  }

  findTaggedCategories(tag) {
    this.setState({activeTag: tag}, function(){
      axios.get(`/${this.state.activeTag}`).then(res => {
        console.log(res.data);
        const tagMatches = res.data;
        this.setState({ tagMatches: tagMatches });
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Home tags={this.state.tags} findTaggedCategories={this.findTaggedCategories} />
        <TaggedCategories activeTag={this.state.activeTag} tagMatches={this.state.tagMatches} />        
      </div>
    );
  }
}

export default App;