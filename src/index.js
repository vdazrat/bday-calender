import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Store from './store';


//import utils from './utils';

//console.log('data',utils.generateDates(10));



//window.store=store;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
