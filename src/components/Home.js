import React from 'react';
import HomeHeader from './HomeHeader';
import HomeSearchBar from './HomeSearchBar';
import HomeTags from './HomeTags';
import ProductsPerCategory from './ProductsPerCategory';


    const Home = (props) => {
        return(
            <div className="container">
                <HomeHeader />
                <img className='img-fluid img' src='http://lorempixel.com/640/480/food' max-width='100%' height='200px' alt='fake-img'/>
                 <HomeSearchBar
                 findTaggedCategories={props.findTaggedCategories} />
                
                <HomeTags tags={props.tags}
                findTaggedCategories={props.findTaggedCategories} />
                
                <ProductsPerCategory products={props.products}
                  findProductCategories={props.findProductCategories}
                />
            </div>
        );
    };

export default Home;