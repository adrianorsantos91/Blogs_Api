const express = require('express');
const loginRouters = require('./routers/loginRouter');
const userRouters = require('./routers/userRouter');
const categorieRouters = require('./routers/categorieRouter');
const errorMiddleware = require('./middlewares/errorHandler');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouters);
app.use('/user', userRouters);
app.use('/categories', categorieRouters);

app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
