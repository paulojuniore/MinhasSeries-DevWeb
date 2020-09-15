const Genre = require('../models/Genre');

module.exports = {
  async store(req, res) {
    console.log(req.body)
    const { genero } = req.body;

    const genre = await Genre.create({ genero });

    return res.json(genre);
  }
}