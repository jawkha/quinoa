import React from 'react';
import logo from './../assets/images/logos/quinoa_logo.jpeg';

const TaggedCategoriesSingleMatch = (props) => {
    return (
        <div className="col-6">
            <img className="img-fluid" src={logo} alt='quinoa logo'/>
            <span className="font-weight-bold float-left">{props.category.category_name}</span>
            <span className="font-weight-bold float-right">{props.category.water_consumption.toLocaleString()} litres</span>
        </div>
    );
}

export default TaggedCategoriesSingleMatch;