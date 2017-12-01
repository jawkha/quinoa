import React, { Component } from 'react';
import Slider from 'react-slick';
import Chart from './Chart-bar';
import logo from '../assets/images/logos/quinoa_logo.jpeg';

class SimpleSlider extends React.Component {
    render() {
        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
    
          <Slider {...settings}>
            {/* instead of the logo pics we will add Chart Component:   <Chart/> */}
            <div> <img src={logo} class="img-responsive" alt="logo" width="100%" height="236"/></div>
            <div> <img src={logo} class="img-responsive" alt="logo" width="100%" height="236"/></div>
            <div> <img src={logo} class="img-responsive" alt="logo" width="100%" height="236"/></div>
            <div> <img src={logo} class="img-responsive" alt="logo" width="100%" height="236"/></div>
          </Slider>
        );
      }
}

export default SimpleSlider;