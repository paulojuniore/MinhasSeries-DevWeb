const Genre = require('../models/Genre');

module.exports = {
  async store(req, res) {
    const { genero } = req.body;

    const genre = await Genre.create({ genero });

    return res.json(genre);
  },

  async list(req, res) {
    const genres = await Genre.findAll();

    return res.json(genres);
  },

  async index(req, res) {
    const { id } = req.params;

    const genre = await Genre.findByPk(id);

    if (genre) {
      return res.json(genre);
    } else {
      return res.status(404).json({ "error": "The genre with the specified id not exists." });
    }
  }
}