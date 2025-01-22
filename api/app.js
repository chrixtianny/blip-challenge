import express from 'express';
import routes from './routes/index.js';
import errorHandler from './middleware/errorHandler.js';

export const app = express();

app.use(express.json());
app.use("/", routes);
app.use(errorHandler);