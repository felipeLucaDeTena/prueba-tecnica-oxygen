import React, { useState } from 'react';
import { tagColors } from '../data/data';

import '../styles/card.scss';

function Card({ item, status, deleteTask, updateTask }) {
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditing = () => {
        setIsEditing(!isEditing);
    };
    const handleClickStatus = () => {
        const newStatus = () => {
            if (item.status === 'todo') {
                return 'done';
            } else if (item.status === 'done') {
                return 'todo';
            }
        };
        updateTask(item, { status: newStatus() });
    };
    const handleClickText = (ev) => {
        ev.preventDefault();
        updateTask(item, { text: ev.target.value });
    };
    const handleClickDelete = () => {
        deleteTask(item);
    };

    return (
        <div className="card">
            <div className="delete__wrapper">
                <h4 className="card__title">{item.title}</h4>
                <div>
                    <button
                        onClick={toggleEditing}
                        className="edit__button"
                        type="button"
                    >
                        edit
                    </button>
                    <button
                        className="delete__button"
                        type="button"
                        onClick={handleClickDelete}
                    >
                        x
                    </button>
                </div>
            </div>
            <div className="card__br"></div>
            <div className="card__container">
                <div className="tag__container">
                    {item.tags.map((tag) => (
                        <div
                            key={tag}
                            style={{
                                backgroundColor: tagColors[tag] || '#ee7ae1',
                            }}
                            className="tag"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="tasks-container">
                    {isEditing ? (
                        <form>
                            <input
                                className="edit__input"
                                type="text"
                                onChange={handleClickText}
                                defaultValue={item.text}
                            />
                        </form>
                    ) : (
                        <p
                            className="card__text"
                            onDoubleClick={() => setIsEditing(true)}
                        >
                            {item.text}
                        </p>
                    )}
                </div>

                <span className="card__date">{item.date}</span>
            </div>
            <button
                onClick={handleClickStatus}
                type="button"
                className="card__status"
                style={{ backgroundColor: status.color }}
            >
                {item.status}
            </button>
        </div>
    );
}

export default Card;
