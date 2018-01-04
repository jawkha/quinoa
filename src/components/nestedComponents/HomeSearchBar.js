import React from 'react';

const HomeSearchBar = () => {
    return (
        <div id="home-search-bar" className="my-3">
            <form> 
                <input id="home-search-input" className="input-group input-group-sm" type="text" placeholder="Search" />
            </form> 
        </div>
    )
};

export default HomeSearchBar;