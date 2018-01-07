import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// STYLES
import './assets/css/App.css';

// COMPONENTS
import Home from './components/Home';
import TagMatches from './components/TagMatches';
import CategoryMatches from './components/CategoryMatches';
import ProductMatches from './components/ProductMatches';


const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/:tag" component={TagMatches} />
					<Route exact path="/:tag/:category" component={CategoryMatches} />
					<Route exact path="/:tag/:category/:product" component={ProductMatches} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;