'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Serie', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      eh_filme: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      id_genero: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Genero', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      classificacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      eh_favorita: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Serie');
  }
};
