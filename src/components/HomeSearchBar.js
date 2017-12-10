import React, {Component} from 'react';

class HomeSearchBar extends Component {
    render() {
        return(
            
            <form name="search-bar" id="search-bar" className='container text-center my-2 py-3'>
            <input type="text" id="search-input" />
            <button type="submit" id="search-button" className="btn btn-success">Search</button>
            </form>
            
        )
    }
}

export default HomeSearchBar;