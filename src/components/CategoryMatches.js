import React, { Component } from 'react';
import axios from 'axios';

import NonHomeHeader from './nestedComponents/NonHomeHeader';
import ActiveCategory from './nestedComponents/ActiveCategory';
import CategoryProducts from './nestedComponents/CategoryProducts';

class CategoryMatches extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTag: this.props.history.location.state.activeTag,
            activeCategory: this.props.history.location.state.activeCategory,
            CategoryMatches: []
        }
        this.getCategoryMatches = this.getCategoryMatches.bind(this);
    }

    componentWillMount() {
        this.getCategoryMatches(this.state.activeCategory);
    }

    getCategoryMatches(category) {
            axios.get(`/${this.state.activeTag}/${this.state.activeCategory}`).then(res => {
              console.log(res.data);
              const CategoryMatches = res.data;
              this.setState({ CategoryMatches: CategoryMatches });
            });
        }

    render() {
        return (
            <div>
                <NonHomeHeader />
                <ActiveCategory activeCategory={this.state.activeCategory} />
                <CategoryProducts CategoryMatches={this.state.CategoryMatches}
                                activeCategory={this.state.activeCategory}
                                history={this.props.history}
                                />
            </div>
        );
    }
};

export default CategoryMatches;