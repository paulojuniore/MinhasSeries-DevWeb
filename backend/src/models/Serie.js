const { Model, DataTypes } = require('sequelize');

class Serie extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      eh_filme: DataTypes.BOOLEAN,
      id_genero: DataTypes.INTEGER,
      classificacao: DataTypes.INTEGER,
      eh_favorita: DataTypes.BOOLEAN,
    }, {
      sequelize: connection,
      timestamps: false,
      tableName: 'Serie',
    });
  }
}

module.exports = Serie;