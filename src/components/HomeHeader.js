import React, { Component } from 'react';
import logo from './../assets/icon-pack/icon-pack/Quinoa logo.svg'

class Header extends Component {
  render() {
    return (
      
         
                 <nav className="navbar navbar-default img-header">
                 <div className="container">
                     <div className="navbar-header">
                         <ul className="nav navbar-nav" >
                              <img className='img-fluid logo' src={logo} alt='logo' width='200' height='200px' />
                         </ul>
                     </div>
                 </div>
               </nav>
        
           
  
    );
  }
}

export default Header;
