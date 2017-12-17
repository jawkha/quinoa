import React from 'react';
import TaggedCategoriesSingleMatch from './TaggedCategoriesSingleMatch';

const TaggedCategoriesMatches = (props) => {
    return (
        <div className="row">
            {props.tagMatches.map(category => (
                <div className='singleMached'>
                <TaggedCategoriesSingleMatch 
                    key={category.category_name}
                    category={category}
                />
                </div>
            ))}
        </div>
    );
}

export default TaggedCategoriesMatches;