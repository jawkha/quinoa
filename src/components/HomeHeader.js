import React from 'react';
import logo from './../assets/images/logos/quinoa_logo.jpeg';

const HomeHeader = () => {
    return (
        <header className="text-center m5">
        <img className="img-fluid" src={logo} alt='quinoa logo'/>
      </header>
    )
}

export default HomeHeader;