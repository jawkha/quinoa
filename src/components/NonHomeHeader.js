import React from 'react';
import TextLogo from './../assets/images/logos/quinoa_logo_text.jpg';

const NonHomeHeader = () => {
    return (
        <header className="text-center">
        <img className="img-fluid" src={TextLogo} alt='quinoa'/>
      </header>
    );
}

export default NonHomeHeader;