import React, {Component} from 'react';

class HomeSearchBar extends Component {
    // render() {
    //     return(
            
    //         <form name="search-bar" id="search-bar" className='container text-center my-2 py-3'>
    //         <input type="text" id="search-input" />
    //         <button type="submit" id="search-button" className="btn btn-success">Search</button>
    //         </form>
            
    //     )
    // }
    constructor(props){
        super(props);
        this.state = {
          tags: [],
          search: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
      }
      
    ///GET REQUEST ---
    //  componentDidMount() {
    //   axios.get("/:tag").then(res => {
    //     this.setState({ tags: res.data });
    //   });
    // }
    // updateSearch= (event) => {
    //   this.setState({
    //     tags:res.data,
    //   search: event.target.value.substr(0,20)
    //   // console.log(event.target.value)
    //   })
    // }
    onInputChange(event) {
      this.setState({
        tags: event.target.value
      })
    }
    
    onFormSubmit(event) {
      event.preventDefault();
    }
      // updateSearch= (event) => {
      //    this.setState({
      //       search: event.target.value.substr(0,20)
      //    // console.log(event.target.value)
      //    })
      // }
    
      render() {
        
        // let filtered = this.props.tags.filter(
        //     (tag) => {
        //       return (tag.tag_name.toLowerCase().indexOf(
        //         this.state.search.toLowerCase()) !== -1
        //       )
        //     }
        // );
    
        return (
          <form>
                <div onSubmit={this.onFormSubmit} className="form-group">
                    {/* <ul>
                     {filtered.map((tag)=>{
                       return (
                         < SingleTag
                         tag={tag.tag_name}
                         key={tag.tag_id}
                         /> )
                     } )
                     } 
    
                   </ul>  */}
                 {/* <input className="form-control input-lg"
                 id="myInput" type="text"
                 onChange={this.updateSearch.bind(this)}
                 value={this.state.search}
                 placeholder='Search for categories'/> */}
                 <input className="form-control"
                 type="text"
                 placeholder='Search'
                 value={this.state.tags}
                 onChange={this.onInputChange}
                 />
                  </div>
                 
        </form>
        );
      }
}

export default HomeSearchBar;