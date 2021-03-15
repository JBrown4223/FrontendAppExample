import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';
import Main from './main.js';

function App() {
  return (
    <div className="App">
      <Switch>
               <Route exact path='/' render={() => (<Main />)} />
      </Switch>
    </div>
  );
}

export default App;
