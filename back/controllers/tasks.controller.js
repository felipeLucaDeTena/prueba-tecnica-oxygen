/* eslint-disable no-unused-vars */
import * as crud from '../services/tasks-crud.js';
import { taskCreator } from '../models/task.model.js';

export const Task = taskCreator();

export const getAllTasks = async (req, res, next) => {
    try {
        const resp = await crud.getAllTasks(Task);
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

export const getTask = (req, res, next) => {
    crud.getTask(req.params.id, Task)
        .then((resp) => {
            res.json(resp);
        })
        .catch((err) => next(err));
};

export const insertTask = (req, res, next) => {
    crud.insertTask(req.body, Task)
        .then((resp) => {
            if (resp === null) {
                res.status(406);
            }
            res.json(resp);
        })
        .catch((err) => next(err));
};

export const updateTask = (req, res, next) => {
    crud.updateTask(req.params.id, req.body, Task)
        .then((resp) => {
            res.json(resp);
        })
        .catch((err) => next(err));
};

export const deleteTask = (req, res, next) => {
    console.log('hshowid', req.params.id);
    crud.deleteTask(req.params.id, Task)
        .then((resp) => {
            if (resp) {
                res.status(202);
                res.json(resp);
            } else {
                res.status(204);
                res.json({ message: 'Tarea no existente' });
            }
        })
        .catch((err) => {
            next(err);
        });
};
