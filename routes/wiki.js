const express = require("express");
const routes = express.Router();

routes.get('/', (req, res, next) => {
  console.log('Youre getting /wiki/');
});

routes.post('/', (req, res, next) => {
  console.log('Youre posting /wiki/');
});

routes.get('/add', (req, res, next) => {
  console.log('Youre getting /wiki/add');
});

module.exports = routes;
