import React, {Component} from 'react';

import Store from '../stores/Store';
import Actions from '../actions/Actions';

import HomeHeader from './HomeHeader';
import HomeSearchBar from './HomeSearchBar';
import HomeTags from './HomeTags';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            tags: [],
            tagMatches: [],
            activeTag: ""
        };
    }

    componentDidMount() {
		Actions.getTags();
	}

	componentWillUnmount() {
		this.storeSubscription.remove();
	}

    render() {
        return(
            <div className="container">
                <HomeHeader />
                <HomeSearchBar />
                <HomeTags tags={this.state.tags} />
            </div>
        );
    }
}

export default Home;