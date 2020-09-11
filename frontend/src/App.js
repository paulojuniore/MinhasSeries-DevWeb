import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './styles/global.css';

import Header from './components/Header';
import BodyHome from './components/BodyHome';
import Genres from './pages/Genres';
import Series from './pages/Series';
import NewGenre from './pages/NewGenre';
import NewSerie from './pages/NewSerie';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route path='/' exact component={ BodyHome } />
          <Route path='/generos' exact component={ Genres } />
          <Route path='/generos/novoGenero' exact component={ NewGenre } />
          <Route path='/series' exact component={ Series } />
          <Route path='/series/novaSerie' exact component={ NewSerie } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
