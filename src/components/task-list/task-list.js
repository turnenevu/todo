import React from "react";

import Task from "../task";
import './task-list.css';

const TaskList = ({ todos }) => {

    const elements = todos.map(item => {

        const { id, status, ...itemProps} = item;
        const editInput = <input type="text" className="edit" value={item.label} />;
        return (
            <li key={id} className={status === 'active' ? "" : status}>
                <Task { ...itemProps }/>
                {status === 'editing' ? editInput : null}
            </li>
        );
    });

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    );
}

export default TaskList;