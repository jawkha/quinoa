import React from 'react';
import TaggedCategoriesLookingFor from './TaggedCategoriesLookingFor';
import TaggedCategoriesChart from './TaggedCategoriesChart';
import TaggedCategoriesMatches from './TaggedCategoriesMatches';

    const TaggedCategories = (props) => {
        return(
            <div className="container">
                <TaggedCategoriesLookingFor activeTag={props.activeTag} />
                <TaggedCategoriesChart tagMatches={props.tagMatches} />
                <TaggedCategoriesMatches tagMatches={props.tagMatches}
                activeTag={props.activeTag} />
            </div>
        );
}

export default TaggedCategories;