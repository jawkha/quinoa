import React, { Component } from 'react';
import axios from 'axios';
import Home from './components/Home';
import TaggedCategories from './components/TaggedCategories'; 
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        tags: [],
        tagMatches: [],
        activeTag: "",
        products: []
    };
    this.findTaggedCategories = this.findTaggedCategories.bind(this);
    this.findProductCategories = this.findProductCategories.bind(this);
  }

   //   GET REQUEST --- 
   componentDidMount() {
    axios.get("/home").then(res => {
      console.log(res.data);
      const tags = res.data;
      this.setState({ tags: tags });
    });

    // axios.get("/products/:category").then(res => {
    //   console.log(res.data);
    //   const tags = res.data;
    //   this.setState({ products: products });
    // });
  }


  findTaggedCategories(tag) {
    this.setState(
      {activeTag: tag}, function(){
      axios.get(`/${this.state.activeTag}`).then(res => {
        console.log(res.data);
        const tagMatches = res.data;
        this.setState({ tagMatches: tagMatches });
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    axios.get("/products/:category").then(res => {
      console.log(nextProps);
      const products = res.data;
      this.setState({ products: products });
    }); 
  }

  //products
  findProductCategories(product) {
    this.setState(
      axios.get(`/products/:category${this.state.activeTag}`).then(res => {
        console.log(res.data);
        const tagMatches = res.data;
        this.setState({ tagMatches: tagMatches });
      })
    )
    
  }

  render() {
//      //Loading...
//   if( this.state.tags[0] === undefined ) {
//     return <div>Loading...</div>
// }
    return (
      <div className="App">
        <Home tags={this.state.tags} 
        findTaggedCategories={this.findTaggedCategories}
        products={this.state.products}
        findProductCategories={this.findProductCategories}
        />
        <TaggedCategories activeTag={this.state.activeTag}
        tagMatches={this.state.tagMatches}
        />
      </div>
    );
  }
}

export default App;