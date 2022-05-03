import express from 'express';
const router = express.Router();

import {
    getAllTasks,
    getTask,
    insertTask,
    updateTask,
    deleteTask,
} from '../controllers/tasks.controller.js';

/* GET users listing. */

router.get('/', getAllTasks);
router.get('/:id', getTask);
router.post('/', insertTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;

// module.exports = router;
