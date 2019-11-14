const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const views = require("./views/index");
const layout = require("./views/layout");

app.use(morgan("dev"));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res, next) => {
  res.send(layout(''));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
