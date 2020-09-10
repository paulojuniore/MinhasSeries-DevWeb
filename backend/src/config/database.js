module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'devweb-bd',
  define: {
    timeStamps: false,
    underscored: true,
  }
}