import React from 'react';

const Window = ({ item }) => {
    return (
        <>
            <div className="close-btn-ctn">
                <h1>{item.title}</h1>
                <button className="close-btn">X</button>
            </div>
            <div>
                <h2 className="window__title">Description</h2>
                <p>{item.text}</p>
                <h2 className="window__title">Tags</h2>
                <div>
                    {item.tag.map((tag) => (
                        <div className="window__tag">{tag}</div>
                    ))}
                </div>

                <h2 className="window__title">Status</h2>
                <p>{item.status}</p>
                <h2 className="window__title">Created</h2>
                <span className="window__date">{item.date}</span>
            </div>
        </>
    );
};

export default Window;
