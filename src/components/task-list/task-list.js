import React from "react";

import Task from "../task";
import './task-list.css';

class TaskList extends React.Component {

    constructor(props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleButtonClick(...props) {
        const [ id ] = [...props];
        this.props.onEdited(id);
    }

    handleChange(...props) {
        const [ id, e ] = [...props];
        this.props.onEditItem(id, e.target.value);
    }

    handleKeyDown(...props) {
        const [ id, e ] = [...props];
        if (e.key === 'Enter') {
            this.props.onEdited(id);
        }
    }

    render() {
        const filter = this.props.todos.filter(item => {
            if (this.props.filter === 'All') {
                return item;
            }
            if (this.props.filter === 'Active' && !item.checked) {
                return item;
            } else if (this.props.filter === 'Completed' && item.checked) {
                return item;
            }

            return null;
        });

        const elements = filter.map(item => {
            const { id, checked, edited, ...itemProps} = item;
            const editInput = <input type="text"
                                     className="edit"
                                     value={item.label}
                                     onKeyDown={this.handleKeyDown.bind(this, id)}
                                     onChange={this.handleChange.bind(this, id)} />;
            let classNames = checked ? 'completed' : edited ? 'editing' : null;

            return (
                <li key={id} className={classNames}>
                    <Task { ...itemProps }
                          checked={checked}
                          onChecked={this.props.onChecked(id)}
                          onDeleted={this.props.onDeleted(id)}
                          onEdited={this.handleButtonClick.bind(this, id)}
                          id={id} />
                    {edited ? editInput : null}
                </li>
            );
        });

        return (
            <ul className="todo-list">
                {elements}
            </ul>
        );
    }
}

export default TaskList;