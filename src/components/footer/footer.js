import React from "react";

import TaskFilter from "../task-filter/task-filter";

import "./footer.css";

const Footer = ({ done }) => {
    return (
        <div className="footer">
            <span className="todo-count">{done} items left</span>
            <TaskFilter />
            <button className="clear-completed">Clear completed</button>
        </div>

    );
}

export default Footer;