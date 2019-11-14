const express = require("express");
const routes = express.Router();
const { addPage, editPage, main, userList, userPages, wikiPage } = require('../views/index');
const { db, Page, User } = require('../models');

routes.get('/', (req, res, next) => {
  res.send('Youre getting /wiki/');
  // res.redirect('/');
});

routes.post('/', async (req, res, next) => {
  // res.send('Youre posting /wiki/');
  const { name, email, title, content, status} = req.body;

  const page = new Page({
    title,
    slug: title.split(' ').join('').toLowerCase(), // worry about it later
    content,
    status
  });

  try {
    await page.save();
  } catch (e) { next(e) }
});

routes.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = routes;
