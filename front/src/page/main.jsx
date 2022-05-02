import React, { useEffect, useState } from 'react';
import { statuses } from '../data/data';
import Card from '../components/card';
import Form from '../components/form';
import * as api from '../service/api';
import '../styles/main.scss';

const Main = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        api.getAll().then((resp) => {
            console.log(resp);
            return setItems(resp.data);
        });
    }, []);

    const addTask = (newTask) => {
        api.set(newTask).then((resp) => {
            setItems([...items, resp.data]);
        });
    };

    const deleteTask = (task) => {
        api.remove(task.id).then((resp) => {
            if (resp.status === 200) {
                setItems(items.filter((item) => item.id !== task.id));
            }
        });
    };

    const updateTask = (task, parcialTask) => {
        api.update(task, parcialTask).then((resp) => {
            setItems(
                items.map((e) =>
                    e.id === resp.data.id ? { ...e, ...parcialTask } : e
                )
            );
        });
    };

    return (
        <div className="wrapper">
            <Form addTask={addTask}></Form>
            <div className="row">
                {statuses.map((s) => {
                    return (
                        <div key={s.status} className="col__container">
                            <h2 className="col__header">
                                {s.status.toUpperCase()}
                            </h2>
                            {items
                                .filter((i) => i.status === s.status)
                                .map((i) => (
                                    <Card
                                        deleteTask={deleteTask}
                                        updateTask={updateTask}
                                        key={i.id}
                                        item={i}
                                        status={s}
                                    />
                                ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Main;
