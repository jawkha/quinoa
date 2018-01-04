import React from 'react';
import BannerImage from './../../assets/images/banner/healthy-food.jpg';

const HomeBannerImage = () => {
    return (
        <div id="home-banner-image">
            <img className="img-fluid" src={`${BannerImage}`} alt="healthy food" />
        </div>
    )
};

export default HomeBannerImage;
