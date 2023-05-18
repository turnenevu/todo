import React from "react";

import Footer from "../footer";
import TaskList from "../task-list";
import NewTaskForm from "../new-task-form";

import './app.css';

const App = () => {

    const todoData = [
        {label: 'Completed taskbek', status: 'completed', id: 1},
        {label: 'Editing task', status: 'editing', id: 2},
        {label: 'Active task', status: 'active', id: 3},
    ];

    return (
        <div className="todoapp">
            <NewTaskForm />
            <div className="main">
                <TaskList todos={todoData} />
                <Footer done={1} />
            </div>
        </div>
    );
}

export default App