const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const views = require('./views/index');
const layout = require('./views/layout');
const { db, Page, User } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

db.authenticate().then(() => {
  console.log('connected to the database');
});

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
});

app.use('/wiki', wikiRouter);

app.use('/:name', (req, res, next) => {
  const name = req.param.name;
  if (name !== 'wiki') {
    res.redirect('/wiki');
  }
});

const port = 3000;

const connect = async () => {
  await db.sync();
  app.listen(port, () => {
    console.log(`Connected to port ${port}`);
  });
};

connect();
