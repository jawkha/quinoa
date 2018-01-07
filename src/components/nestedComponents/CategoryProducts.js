import React from 'react';
import ProductsSingleMatch from './ProductsSingleMatch';

const CategoryProducts = (props) => {
    return (
        <div>
            <p className="tag-name pt-2 px-3">Products found in the <strong>{props.activeCategory.toLowerCase()}</strong> category</p>
            <div className="row">
                {props.CategoryMatches.map(product => (
                    <ProductsSingleMatch 
                        key={product.id}
                        activeTag={props.activeTag}
                        product={product}
                        history={props.history}
                    />
                ))}
            </div>
        </div>    
    );
}

export default CategoryProducts;