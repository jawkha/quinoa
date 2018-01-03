import React from 'react';
import Waterlcon from './../assets/icon-pack/icon-pack/water_icon.svg';

const TaggedCategoriesSingleMatch = (props) => {
    return (
        <div className="col-6 singleMatched">
            <span className="font-weight-bold float-left">
                {props.category.category_name}
            </span>
            <span className="font-weight-bold float-right water">
                {props.category.water_consumption.toLocaleString() } 
                <span className='litre' > L/Kg 
                <img className='img-fluid Waterlcon' src={Waterlcon} alt='logo' width='50' height='50px' />
            </span>
            </span>
        </div>
    );
}

export default TaggedCategoriesSingleMatch;