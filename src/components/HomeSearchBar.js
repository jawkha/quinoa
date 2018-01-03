import React, {Component} from 'react';

class HomeSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tag : ''
    }

    this.onInputChange = this.onInputChange.bind(this);
  };

  onInputChange(tag) {
    this.setState({tag});
    this.props.findTaggedCategories(tag);
}

  render() {
    return (
      <div>
      <input
      className="form-control input-sl"
      placeholder='Search'
      type='text'
      /*controlled components =>>> value={this.state.term}*/ 
      value={this.state.tag} 
      onChange={event => this.onInputChange(event.target.value)} />
      {/* {this.state.tag} */}
      </div>
    )
  }
}

export default HomeSearchBar;

 
//     onFormSubmit(event) {
//       event.preventDefault();
//     }
//       // updateSearch= (event) => {
//       //    this.setState({
//       //       search: event.target.value.substr(0,20)
//       //    // console.log(event.target.value)
//       //    })
//       // }
    
        
//         // let filtered = this.props.tags.filter(
//         //     (tag) => {
//         //       return (tag.tag_name.toLowerCase().indexOf(
//         //         this.state.search.toLowerCase()) !== -1
//         //       )
//         //     }
//         // );