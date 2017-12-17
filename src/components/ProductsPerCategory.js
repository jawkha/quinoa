import React, { Component } from 'react';
import SingleProduct from './SingleProduct';

const ProductsPerCategory = (props) => {
        return (
            <div>
                <h2>{props.category.category_name}</h2>
                <p>Products found in a <strong>{props.category.category_name}</strong>category</p>
                {props.products.map(product => (
                 <SingleProduct 
                  key={product.product_id}
                  tag={product.product_name}
                       />  
                    ))} 
            </div>
        )
};

export default ProductsPerCategory;