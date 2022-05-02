import axios from 'axios';

const TASKS_API = 'http://localhost:3001/tasks/';

export function getAll() {
    return axios.get(TASKS_API);
}
export function get(id) {
    return axios.get(TASKS_API + id);
}
export function set(task) {
    return axios.post(TASKS_API, task);
}
export function update(task, parcialTask) {
    return axios.patch(TASKS_API + task.id, parcialTask);
}
export function remove(id) {
    return axios.delete(TASKS_API + id);
}
