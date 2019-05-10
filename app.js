const express = require('express');
const json = require('data.json');

const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.use((req, res, next) => {
  const err = new Error('You have an error');
  err.status = 500;
  next(err);
});
//Configure index route to render "Home" page
app.get('/', (req, res) => {
  res.render('index');
});
//Configure about route to render "About" page
app.get('/about', (req, res) => {
  res.render('about');
});
//Configure projects route to render "Projects" page
app.get('/project', (req, res) => {
  res.render('project');
});

app.use((req, res, next) => {
  const err = newError('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
});

app.listen(3000, () => {
  console.log("running on localhost:3000");
});
