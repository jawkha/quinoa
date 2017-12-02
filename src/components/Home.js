import React, {Component} from 'react';

import HomeHeader from './HomeHeader';
import HomeSearchBar from './HomeSearchBar';
import HomeTags from './HomeTags';

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container">
                <HomeHeader />
                <HomeSearchBar findTaggedCategories={this.props.findTaggedCategories} />
                <HomeTags tags={this.props.tags} findTaggedCategories={this.props.findTaggedCategories} />
            </div>
        );
    }
}

export default Home;