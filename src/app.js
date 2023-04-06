const express = require('express');
const routeLogin = require('./routes/routeLogin');
const routeUser = require('./routes/routeUser');
const routeCategory = require('./routes/routeCategory');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', routeLogin);
app.use('/user', routeUser);
app.use('/categories', routeCategory);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
