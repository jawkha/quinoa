import React, { Component } from "react";

import DropletsIcon from './../../assets/icons/water.svg';
import FootprintIcon from './../../assets/icons/footprint.svg';

class TaggedCategoriesSingleMatch extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        let category = this.props.category.category_name;
        this.props.history.push({
            pathname: `/${this.props.activeTag}/${category.toLowerCase()}`,
            state: {activeTag: this.props.activeTag,
                    activeCategory: category}
        }); // this will change the url and result in rendering of new view
    }

    render() {
        return (
            <div className='container' onClick={this.handleClick} >
                <div className="category-card col-xs-12 mx-2 px-2 my-2 py-4">
                    <div className="category-name">
                        {this.props.category.category_name}
                    </div>
                    <div className="category-water">
                        <img src={`${DropletsIcon}`} alt="droplets icon"/>
                        {this.props.category['water_consumption (litres)'].toLocaleString()} L/Kg
                    </div>
                    <div className="category-carbon">
                    <img src={`${FootprintIcon}`} alt="footprint icon" />
                        {(this.props.category['co2_production (grams)']*(0.001)).toFixed(2)} Kg CO2
                    </div>
                </div>
            </div>
        );
    }
}    

export default TaggedCategoriesSingleMatch;