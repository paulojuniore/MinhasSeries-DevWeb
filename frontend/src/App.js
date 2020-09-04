import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './styles/global.css';

import Header from './components/Header';
import Home from './components/Home';
import Genre from './components/Genre';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/generos' component={ Genre } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
