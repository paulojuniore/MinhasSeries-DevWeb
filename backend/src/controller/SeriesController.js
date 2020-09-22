const Serie = require('../models/Serie');

module.exports = {
  async store(req, res) {
    const { 
      nome, 
      eh_filme, 
      id_genero, 
      classificacao,
      eh_favorita
    } = req.body;

    const serie = await Serie.findOne({ where: { nome } });

    if (serie) {
      return res.status(200).json(serie)
    } else {
      const serie_or_movie = await Serie.create({
        nome,
        eh_filme,
        id_genero,
        classificacao,
        eh_favorita
      });
      
      return res.status(200).json(serie_or_movie);
    }
  },

  async list(req, res) {
    const series = await Serie.findAll();

    return res.status(200).json(series);
  },

  async index(req, res) {
    const { id } = req.params;

    const serie = await Serie.findByPk(id);

    if (serie) {
      return res.status(200).json(serie);
    } else {
      return res.status(404).json({ "error": "The movie/serie with the specified id not exists." });
    }
  }
}