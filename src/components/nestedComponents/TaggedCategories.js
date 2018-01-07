import React from 'react';
import TaggedCategoriesSingleMatch from './TaggedCategoriesSingleMatch';

const TaggedCategories = (props) => {
    return (
        <div>
            <hr />
            <p className="tag-name pt-2 px-3">Categories found matching the tag <strong>{props.activeTag}</strong></p>
            <div className="row">
                {props.tagMatches.map(category => (
                    <TaggedCategoriesSingleMatch 
                        key={category.category_name}
                        activeTag={props.activeTag}
                        category={category}
                        history={props.history}
                    />
                ))}
            </div>
        </div>    
    );
}

export default TaggedCategories;