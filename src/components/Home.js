import React from 'react';
import axios from 'axios';

import HomeHeader from './nestedComponents/HomeHeader';
import HomeBannerImage from './nestedComponents/HomeBannerImage';
import HomeSearchBar from './nestedComponents/HomeSearchBar';
import AllTags from './nestedComponents/AllTags';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            tags: [],
        };
        this.getTags = this.getTags.bind(this);
    }
    
    componentDidMount() {
		this.getTags();
    }

    getTags() {
        axios.get('/home').then(res => {
            console.log(res.data);
            const tags = res.data;
            this.setState({tags: tags});
        });
    }

    render() {
        return (
        <div className="container">
            <HomeHeader />
            <HomeBannerImage />
            <HomeSearchBar />
            <AllTags tags={this.state.tags}
                      history={this.props.history}
                      />
        </div> 
        );
    }    
};

export default Home;