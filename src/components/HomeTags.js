import React from "react";
import HomeSingleTag from "./HomeSingleTag";

const HomeTags = props => {
  return (
    <div className="well">
    <p className="text" >What kind of product are you looking for?</p>
    <p className="text2" >Select a <b>tag</b> below</p>
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