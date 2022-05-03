export async function getAllTasks(Task) {
    return await Task.find({});
}

export async function getTask(id, Task) {
    return await Task.findById(id);
}

export async function insertTask(body, Task) {
    const newTask = new Task(body);
    const result = await newTask.save();
    return result;
}

export async function updateTask(id, partialTask, Task) {
    return await Task.findByIdAndUpdate(id, partialTask, { new: true });
}

export async function deleteTask(id, Task) {
    return await Task.findByIdAndDelete(id);
}
