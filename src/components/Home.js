import React from 'react';
import axios from 'axios';

import HomeHeader from './nestedComponents/HomeHeader';
import HomeBannerImage from './nestedComponents/HomeBannerImage';
import HomeSearchBar from './nestedComponents/HomeSearchBar';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            tags: [],
            activeTag: '',
            tagMatches: [],
        };
        this.getTags = this.getTags.bind(this);
        this.getTagMatches = this.getTagMatches.bind(this);
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

    getTagMatches(tag) {
        this.setState({activeTag: tag}, function(){
            axios.get(`/${this.state.activeTag}`).then(res => {
              console.log(res.data);
              const tagMatches = res.data;
              this.setState({ tagMatches: tagMatches });
            });
        });
    }

    render() {
        return (
        <div className="container">
            <HomeHeader />
            <HomeBannerImage />
            <HomeSearchBar />
            <div>
                <p>What kind of product are you looking for?</p>
                <p>Select a <strong>tag</strong> below</p>
            </div>
            <div id="tags-container">
                    <p>tag cards will show up here</p>
            </div>
        </div> 
        );
    }    
};

export default Home;