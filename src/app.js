const express = require('express');
const routeLogin = require('./routes/routeLogin');
const routeUser = require('./routes/routeUser');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', routeLogin);
app.use('/user', routeUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
