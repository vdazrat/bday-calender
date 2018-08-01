import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Day from './models';


//import utils from './utils';

//console.log('data',utils.generateDates(10));

const data = [
  {
    "name": "Hadley Reichert",
    "birthday": "1975/1/31"
  },
  {
    "name": "Noemy Walsh",
    "birthday": "1975/6/12"
  },
  {
    "name": "Cheyanne Treutel",
    "birthday": "1975/10/18"
  },
  {
    "name": "Maud Parisian",
    "birthday": "1975/7/9"
  },
  {
    "name": "Napoleon Muller",
    "birthday": "1975/5/29"
  },
  {
    "name": "Gavin Dach",
    "birthday": "1975/8/16"
  },
  {
    "name": "Gladys Hansen PhD",
    "birthday": "1975/3/17"
  },
  {
    "name": "Lisandro Hayes",
    "birthday": "1975/2/26"
  },
  {
    "name": "Zachariah O'Connell",
    "birthday": "1975/6/18"
  },
  {
    "name": "Skylar Rice",
    "birthday": "1975/9/12"
  }
];

const day = new Day('Monday', data);
window.dday = day;


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
