import React, {Component} from 'react';

import Title from './Title';
import TaggedCategoriesLookingFor from './TaggedCategoriesLookingFor';
import TaggedCategoriesChart from './TaggedCategoriesChart';
import TaggedCategoriesMatches from './TaggedCategoriesMatches';

class TaggedCategories extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container">
                <Title />
                <TaggedCategoriesLookingFor activeTag={this.props.activeTag} />
                <TaggedCategoriesChart tagMatches={this.props.tagMatches} />
                <TaggedCategoriesMatches tagMatches={this.props.tagMatches} />
            </div>
        );
    }
}

export default TaggedCategories;