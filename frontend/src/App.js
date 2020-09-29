import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './styles/global.css';

import Header from './components/Header';
import Home from './pages/Home';
import Genres from './pages/Genres';
import Series from './pages/Series';
import NewGenrePage from './pages/NewGenrePage';
import NewSeriePage from './pages/NewSeriePage';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/generos' exact component={ Genres } />
          <Route path='/generos/novoGenero' exact component={ NewGenrePage } />
          <Route path='/series' exact component={ Series } />
          <Route path='/series/novaSerie' exact component={ NewSeriePage } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
