import React from 'react';

import Title from './Title';
import TaggedCategoriesLookingFor from './TaggedCategoriesLookingFor';
import TaggedCategoriesChart from './TaggedCategoriesChart';
import TaggedCategoriesMatches from './TaggedCategoriesMatches';

// class TaggedCategories extends Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
    const TaggedCategories = (props) => {
        return(
            <div className="container">
                <Title />
                <TaggedCategoriesLookingFor activeTag={props.activeTag} />
                <TaggedCategoriesChart tagMatches={props.tagMatches} />
                <TaggedCategoriesMatches tagMatches={props.tagMatches} />
            </div>
        );
 //   }
}

export default TaggedCategories;