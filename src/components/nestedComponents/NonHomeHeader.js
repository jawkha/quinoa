import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../../assets/icons/quinoa_logo.svg';

const NonHomeHeader = () => {
    return (
        <div id="header" className="text-center" > 
            <Link to="/" ><img className="py-2" src={`${Logo}`} alt="quinoa logo"/></Link>
        </div>
    )
};

export default NonHomeHeader;