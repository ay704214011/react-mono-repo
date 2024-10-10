const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const responseHeaderMiddleware = require('./middleware/responseHeader');
const sendError = require('./utils/sendError');
const itemsRouter = require('./routes/items.route');
const corsOptions = require('./config/cors');
const authRouter = require('./routes/auth.route');
const usersRouter = require('./routes/users.route');

dotenv.config({
    path: 'config/config.development.env'
});

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
//CORS
app.use(cors(corsOptions));

//helmet
app.use(helmet());
//Set response header
app.use(responseHeaderMiddleware);

//routes
app.use('/api/v1/items', itemsRouter);
app.use('/api/secure/auth', authRouter);
app.use('/api/secure/users', usersRouter);

app.all('*', (_, res) => {
    sendError(res, 404, '404', 'Invalid route');
});


const PORT  = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server started on port ', PORT);
});