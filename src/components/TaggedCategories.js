import React, {Component} from 'react';

import Store from '../stores/Store';
import Actions from '../actions/Actions';

import NonHomeHeader from './NonHomeHeader';
import TaggedCategoriesLookingFor from './TaggedCategoriesLookingFor';
import TaggedCategoriesChart from './TaggedCategoriesChart';
import TaggedCategoriesMatches from './TaggedCategoriesMatches';

class TaggedCategories extends Component {
    constructor() {
        super();
        this.state = {
            tags: [],
            tagMatches: [],
            activeTag: ""
        };
    }

    componentDidMount() {
		this.storeSubscription = Store.addListener(data =>
			this.handleStoreChange(data)
		);
	}

	componentWillUnmount() {
		this.storeSubscription.remove();
	}

	handleStoreChange(data) {
		this.setState({data: data});
	}

    render() {
        return(
            <div className="container">
                <NonHomeHeader />
                <TaggedCategoriesLookingFor activeTag={this.state.activeTag} />
                <TaggedCategoriesChart tagMatches={this.state.tagMatches} />
                <TaggedCategoriesMatches tagMatches={this.state.tagMatches} />
            </div>
        );
    }
}

export default TaggedCategories;