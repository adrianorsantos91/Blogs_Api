const express = require('express');
require('express-async-errors');
const loginRouters = require('./routers/loginRouter');
const errorMiddleware = require('./middlewares/errorHandler');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouters);

app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
