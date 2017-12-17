import React, { Component } from 'react';
import logo from './../assets/icon-pack/icon-pack/Quinoa logo.svg'

class Header extends Component {
  render() {
    return (
      <div className="container img-header">
         
        {/* <div className="row">
       {/* <div className='col-xs-.5'><a href='#'>Back</a></div> */}
       {/* <div className='col-xs-.5'><img src={logo} alt='logo'/></div>
       <div className='col-xs-11.5'><div className="text-center"> */}
                 {/* <h1>Quinoa</h1> */} 
         
                 <img className='img-fluid logo' src={logo} alt='logo' width='200' height='200px' />
             </div>
        
           
  
    );
  }
}

export default Header;
