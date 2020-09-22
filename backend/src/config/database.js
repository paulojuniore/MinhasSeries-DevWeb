module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'devweb-bd',
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