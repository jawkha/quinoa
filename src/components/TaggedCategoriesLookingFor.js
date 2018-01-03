import React from 'react';

const TaggedCategoriesLookingFor = (props) => {
    return (
        <div>
        <h5 className="py-2 my-2"><span className="text-capitalize">
        {props.activeTag}</span> </h5>
        </div>
    )
}

export default TaggedCategoriesLookingFor;