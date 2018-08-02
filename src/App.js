import React, { Component } from 'react';
import { Provider } from 'mobx-react'
import Home from './pages/Home';
import Store from './store';

const data1 = [
  [],
  ['GH'],
  ['GH', 'AA'],
  ['GH', 'AA', 'LL', 'MM', 'NN', 'OP'],
  ['GH', 'AA', 'LL'],
  ['GH', 'AA', 'LL'],
  ['GH', 'AA', 'LL'],

];


let gid = 0;
function getUniqueId() {
    gid += 1;
    return gid;
}

const data = [
  {
    "name": "Hadley Reichert",
    "birthday": "1975/1/31",
    id: getUniqueId(),
  },
  {
    "name": "Noemy Walsh",
    "birthday": "1975/6/12",
    id: getUniqueId(),
  },
  {
    "name": "Cheyanne Treutel",
    "birthday": "1975/10/18",
    id: getUniqueId(),
  },
  {
    "name": "Maud Parisian",
    "birthday": "1975/7/9",
    id: getUniqueId(),
  },
  {
    "name": "Napoleon Muller",
    "birthday": "1975/5/29",
    id: getUniqueId(),
  },
  {
    "name": "Gavin Dach",
    "birthday": "1975/8/16",
    id: getUniqueId(),
  },
  {
    "name": "Gladys Hansen PhD",
    "birthday": "1975/3/17",
    id: getUniqueId(),
  },
  {
    "name": "Lisandro Hayes",
    "birthday": "1975/2/26",
    id: getUniqueId(),
  },
  {
    "name": "Zachariah O'Connell",
    "birthday": "1975/6/18",
    id: getUniqueId(),
  },
  {
    "name": "Skylar Rice",
    "birthday": "1975/9/12",
    id: getUniqueId(),
  }
];

const store = new Store();
store.setData(data);
store.setYear(0);
window.store = store;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
            <Home />
        </Provider>
      </div>
    );
  }
}

export default App;
