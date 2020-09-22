require('dotenv/config');

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_DEV_HOST,
  username: process.env.DB_DEV_USER,
  password: process.env.DB_DEV_PASSWORD,
  database: process.env.DB_DEV_DBNAME,
  define: {
    timeStamps: false,
    underscored: true,
  },
  // dialectOptions: { 
  //   native: true,
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false, 
  //   }
  // },
  // ssl: true,
}