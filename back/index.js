import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { mongoConnect } from './services/db.js';
import tasksRouter from './routes/tasks.routes.js';
import { taskCreator } from './models/task.model.js';

export const app = express();
const port = 3600;

mongoConnect();
export const Task = taskCreator();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/tasks', tasksRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, resp, next) => {
    resp.status(err.status);
    resp.json({ error: err.message });
});

export const server = app.listen(port);
