import React, { Component } from 'react';
import Header from './Header';
import SimpleSlider from './Slider';

class SecondP extends Component {
  render() {
    return (
      <div class="container">
              
              <Header />
              <SimpleSlider/>
  
          </div>
    );
  }
}

export default SecondP;







// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

