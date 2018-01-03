import React from 'react';
import TaggedCategoriesSingleMatch from './TaggedCategoriesSingleMatch';

const TaggedCategoriesMatches = (props) => {
    return (
        <div>
            <hr/>
        <p>Categories found matching the tag <b>{props.activeTag}</b></p>
        <div className="row">
            {props.tagMatches.map(category => (
                <TaggedCategoriesSingleMatch 
                    key={category.category_name}
                    category={category}
                />
            ))}
        </div>
        </div>
    );
}

export default TaggedCategoriesMatches;