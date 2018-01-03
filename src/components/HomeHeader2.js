import React, { Component } from 'react';
import logo from './../assets/icon-pack/icon-pack/Quinoa logo.svg'

class Header2 extends Component {
  render() {
    return (
        <nav className="navbar navbar-default img-header">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav" >
                         <img className='img-fluid logo2' src={logo} alt='logo' width='200' height='200px' />
                      <h5 className="back" >Back</h5>
                    </ul>
                </div>
            </div>
          </nav>
        
           
  
    );
  }
}

export default Header2;
