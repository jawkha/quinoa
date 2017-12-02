import React from 'react';

const TaggedCategoriesSingleMatch = (props) => {
    return (
        <div>
            <p>{props.category.category_name}</p>
            <p>{props.category.water_consumption}</p>
        </div>
    );
}

export default TaggedCategoriesSingleMatch;