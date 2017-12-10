import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import TaggedCategories from './components/TaggedCategories';


const Routes = () => {
  return (

    <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/second" component={TaggedCategories} />
      </div>
    </BrowserRouter>
  )
};
export default Routes;
