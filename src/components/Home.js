import React from 'react';

import HomeHeader from './HomeHeader';
import HomeSearchBar from './HomeSearchBar';
import HomeTags from './HomeTags';

// class Home extends Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
    const Home = (props) => {
        return(
            <div className="container">
                <HomeHeader />
                <img className='img-fluid img' src='http://lorempixel.com/640/480/food' max-width='100%' height='200px' alt='fake-img'/>
                <HomeSearchBar findTaggedCategories={props.findTaggedCategories} />
                <HomeTags tags={props.tags} findTaggedCategories={props.findTaggedCategories} />
            </div>
        );
    }
//}

export default Home;