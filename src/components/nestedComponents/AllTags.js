import React from "react";

import SingleTag from "./SingleTag";

const AllTags = props => {

  return (
    <div>
        <div>
            <p>What kind of product are you looking for?</p>
            <p>Select a <strong>tag</strong> below</p>
        </div>
      {props.tags.map(tag => (
        <SingleTag
          key={tag.tag_id}
          tag={tag.tag_name}
          history={props.history}
        />
      ))}
    </div>
  );
};

export default AllTags;