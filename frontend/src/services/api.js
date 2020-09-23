const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api-dev-web.herokuapp.com',
});

export default api;