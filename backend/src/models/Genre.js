const { Model, DataTypes } = require('sequelize');

class Genre extends Model {
  static init(connection) {
    super.init({
      genero: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
      tableName: 'Genero',
    });
  }
}

module.exports = Genre;