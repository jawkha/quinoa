import React from 'react';

const ActiveTag = (props) => {
    return (
        <div>
        <h5 className="px-2 mx-2 py-2 my-2 text-capitalize">{props.activeTag}</h5>
        </div>
    )
}

export default ActiveTag;