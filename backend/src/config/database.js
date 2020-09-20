module.exports = {
  dialect: 'postgres',
  host: 'ec2-54-161-150-170.compute-1.amazonaws.com',
  username: 'yvsntvxprwddwh',
  password: 'e37d971c42aff27ecb062932caa7cbd34244304a67bb72e6a45ef01d6ef1f4ea',
  database: 'drvpbuum6d654',
  define: {
    timeStamps: false,
    underscored: true,
  },
  dialectOptions: { 
    native: true,
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    }
  },
  ssl: true,
}