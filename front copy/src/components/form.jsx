import React, { useState } from 'react';
import { Task } from '../data/task';
import '../styles/form.scss';

function Form({ addTask }) {
    const [newTask, setNewTask] = useState(new Task());
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    const handleSubmit = (ev) => {
        ev.preventDefault();
        addTask(newTask);
        setNewTask(new Task());
    };

    const handleChange = (ev) => {
        setNewTask({
            ...newTask,
            [ev.target.name]: ev.target.value,
            date: date + ' ' + time,
        });
    };
    const handleChangeTags = (ev) => {
        setNewTask({
            ...newTask,
            [ev.target.name]: ev.target.value.toLowerCase().split(/[ ,]+/),
        });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form__title-1">CREATE</h2>
            <div className="br"></div>
            <div className="form__container">
                <div className="input__container">
                    <div>
                        <h3 className="form__title">Title</h3>
                        <input
                            onChange={handleChange}
                            name="title"
                            value={newTask.title}
                            className="input"
                            type="text"
                            required
                        />
                    </div>
                    <div>
                        <h3 className="form__title">Tags</h3>
                        <input
                            onChange={handleChangeTags}
                            name="tags"
                            value={newTask.tags}
                            className="input"
                            type="text"
                            required
                        />
                    </div>
                </div>
                <div className="textarea__container">
                    <h3 className="form__title">Description</h3>
                    <textarea
                        onChange={handleChange}
                        className="textarea"
                        name="text"
                        value={newTask.text}
                        required
                    ></textarea>
                </div>
            </div>
            <button className="form__button" type="submit">
                Submit
            </button>
        </form>
    );
}

export default Form;
