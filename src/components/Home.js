import React from 'react';

// Flux elements
import QuinoaStore from './../stores/Store';
import QuinoaActions from './../actions/Actions';

import HomeHeader from './nestedComponents/HomeHeader';
import HomeBannerImage from './nestedComponents/HomeBannerImage';
import HomeSearchBar from './nestedComponents/HomeSearchBar';

class Home extends React.Component {
    constructor() {
        super();
        
        this.state = {
            QuinoaData: QuinoaStore.getState()
        };
        this.handleStoreChange = this.handleStoreChange.bind(this);
    }

    componentDidMount() {
		this.storeSubscription = QuinoaStore.addListener(data =>
			this.handleStoreChange(data)
		);
	}

	componentWillUnmount() {
		this.storeSubscription.remove();
	}

	handleStoreChange() {
		this.setState({ QuinoaData: QuinoaStore.getState() });
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