import React from 'react';
import ReactDOM, {render } from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
var title = "App title"
ReactDOM.render(<App appTitle={title} >Hello World </App>, document.getElementById('xyz'));
// registerServiceWorker();


// index.js - trigger the initial render
// App.js (App Component) - which is consumed in index js -- root component

//<App />