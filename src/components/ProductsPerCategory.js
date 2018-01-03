import React from 'react';
import SingleProduct from './SingleProduct';

const ProductsPerCategory = (props) => {
        return (
            <ul>
                 {/* <h2>{props.products.heading}</h2>  */}
                 <p>Products found in a <strong>{props.products.heading}</strong>category</p> 
                 {props.products.map((product) => (
                 <SingleProduct 
                   key={product.id}
                  product={product.heading}
                   findProductCategories={props.findProductCategories}
                       />  
                 )
        )}  
   
            </ul>
        )
};

export default ProductsPerCategory;