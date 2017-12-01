import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import SecondP from './components/Second-page';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();








// // Copied from http:jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
// function getUrlVars() {
//     var vars = [], hash;
//     var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
//     for (var i = 0; i < hashes.length; i++) {
//       hash = hashes[i].split('=');
//       vars.push(hash[0]);
//       vars[hash[0]] = hash[1];
//     }
//     return vars;
//   }
  
//   var urlParams = getUrlVars();
  
//   switch (urlParams["startPage"]) {
//     case "App.secondp":
//       ReactDOM.render(<SecondP />, document.getElementById('root'));
//       break;
  
//     case undefined:
//     default:
//       ReactDOM.render(<App />, document.getElementById('root'));
//       break;
//   }
