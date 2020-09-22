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


  }
}