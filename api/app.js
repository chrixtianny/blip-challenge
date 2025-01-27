import express from 'express';
import routes from './routes/index.js';
import errorHandler from './middleware/errorHandler.js';
import notFound from './middleware/notFound.js';

export const app = express();

app.use(express.json());
app.use(routes);
app.use(notFound);
app.use(errorHandler);