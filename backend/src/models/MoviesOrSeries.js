const { Model, DataTypes } = require('sequelize');

class MoviesOrSeries extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      id_genero: DataTypes.INTEGER,
      classificacao: DataTypes.INTEGER,
    }, {
      sequelize: connection,
      timestamps: false,
      tableName: 'Series',
    });
  }
}

module.exports = MoviesOrSeries;