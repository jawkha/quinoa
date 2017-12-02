import React from 'react';

const TaggedCategoriesLookingFor = (props) => {
    return (
        
        <h3>Looking for <span className="text-capitalize">{props.activeTag}</span> </h3>
      
    )
}

export default TaggedCategoriesLookingFor;