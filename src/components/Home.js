import React from 'react';

import QuinoaStore from './../stores/Store';
import QuinoaActions from './../actions/Actions';

import Logo from './../assets/icons/quinoa_logo.svg';
import BannerImage from './../assets/images/banner/healthy-food.jpg';

class Home extends React.Component {
    constructor() {
        super();
        
        this.state = {
            QuinoaData: QuinoaStore.getState()
        };
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
            <div id="home-header" className="text-center" >
                <img className="py-2" src={`${Logo}`} alt="quinoa logo"/>
            </div>
            <div id="home-banner-image">
                <img className="img-fluid" src={`${BannerImage}`} alt="healthy food" />
            </div>
            <div id="home-search-bar" className="my-3">
                <form> 
                    <input id="home-search-input" className="input-group input-group-sm" type="text" placeholder="Search" />
                </form> 
            </div>
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