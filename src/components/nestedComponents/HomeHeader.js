import React from 'react';
import Logo from './../../assets/icons/quinoa_logo.svg';

const HomeHeader = () => {
    return (
        <div id="home-header" className="text-center" >
            <img className="py-2" src={`${Logo}`} alt="quinoa logo"/>
        </div>
    )
};

export default HomeHeader;