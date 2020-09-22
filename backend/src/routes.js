const express = require('express');

const routes = express.Router();

const GenreController = require('./controller/GenreController');
const SeriesController = require('./controller/SeriesController');

routes.get('/', (req, res) => {
  return res.json({ "teste": "ok" })
});

routes.post('/generos', GenreController.store);
routes.get('/generos', GenreController.list);
routes.get('/generos/:id', GenreController.index);
routes.post('/series', SeriesController.store);

module.exports = routes;