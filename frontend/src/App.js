import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './styles/global.css';

import Genres from './pages/Genres';
import Header from './components/Header';
import BodyHome from './components/BodyHome';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route path='/' exact component={ BodyHome } />
          <Route path='/generos' component={ Genres } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
