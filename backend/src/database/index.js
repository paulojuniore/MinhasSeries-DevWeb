const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Genre = require('../models/Genre');
const Serie = require('../models/Serie');

const connection = new Sequelize(dbConfig);

Genre.init(connection);
Serie.init(connection);

Serie.associate(connection.models);

module.exports = connection;