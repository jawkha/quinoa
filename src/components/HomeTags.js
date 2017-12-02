import React from "react";

import HomeSingleTag from "./HomeSingleTag";

const HomeTags = props => {
  return (
    <div className="well">
      {props.tags.map(tag => (
        <HomeSingleTag
          key={tag.tag_id}
          tag={tag.tag_name}
          findTaggedCategories={props.findTaggedCategories}
        />
      ))}
    </div>
  );
};

export default HomeTags;
