import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div class="container">
            <form>
            <div class="form-group">
            <label for="inputlg">Search</label>
            <input class="form-control input-lg" id="inputlg" type="text" placeholder='Search for categories'/>
          </div>
             </form>
    </div>
    );
  }
}

export default SearchBar;