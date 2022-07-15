const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',
  })
);
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use('/allrede', require('./routes/homePage.route'));

module.exports = { app };
