const express = require('express');

const routes = express.Router();

const GenreController = require('./controller/GenreController');

routes.get('/', (req, res) => {
  return res.json({ "teste": "ok" })
});

routes.post('/generos', GenreController.store);

module.exports = routes;