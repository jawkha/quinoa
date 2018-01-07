import React, { Component } from "react";

class ProductsSingleMatch extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='container' onClick={this.handleClick} >
                <div className="category-card col-xs-12 mx-2 px-2 my-2 py-4">
                    <p>{this.props.product.heading}</p>
                </div>
            </div>        
        );
    }
}    

export default ProductsSingleMatch;