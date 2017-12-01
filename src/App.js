import React, { Component } from 'react';
import './App.css';
import logo from './assets/images/logos/quinoa_logo.jpeg';
import SearchBar from './components/Search-bar';
import FaChevronRight from 'react-icons/lib/fa/chevron-right';

import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';



class App extends Component {
  
  render() {
    return (
      <div class="container">

      <img src={logo} class="img-responsive img" alt="logo" width="100%" height="236"/>
      
       <SearchBar />

       <p class="h3">What we are looking for!</p>

       <Navbar>
        <Nav>
     <div class="row">
       <div class='col-xs-8 tags'> <p class="h4">Tags</p></div>
       <div class='col-xs-4 icon'> <FaChevronRight /></div>
     </div>
       </Nav>
     </Navbar>
      

    </div>
    );
  }
}

export default App;






      

      
      // <Navbar>
      //   <Navbar.Header>
      //   <Navbar.Brand> 
      //   <a href='#'>react-bootstrap</a>
        
      //   </Navbar.Brand> 
      //   </Navbar.Header>
      //   <Nav>
      //     <NavItem eventKey={1} href="#">link</NavItem>
      //     <NavItem eventKey={2} href="#">link</NavItem>
      //     <NavDropdown eventKey={3} title="Dropdown" id='basic-nav-dropdown'>
      //      <MenuItem eventKey={3.1}> action</MenuItem>
      //      <MenuItem eventKey={3.2}>another action</MenuItem>
      //      <MenuItem eventKey={3.3}> something else here</MenuItem>
      //      <MenuItem divider/>
      //      <MenuItem eventKey={3.3}> separated link</MenuItem>
      //       </NavDropdown>
      //   </Nav>
      // </Navbar>

