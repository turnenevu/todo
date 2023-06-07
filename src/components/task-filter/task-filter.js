import React from "react";

import "./task-filter.css";

class TaskFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.props.changeFilter(id);
    }

    render() {
        const buttons = this.props.filter.map(item => {
            const classNames = this.props.name === item.name ? "selected" : null;
            return (
                <li key={item.id}>
                    <button type="button" className={classNames} onClick={this.handleClick.bind(this, item.id)}>{item.name}</button>
                </li>
            );
        });

        return (
            <ul className="filters">
                {buttons}
            </ul>
        );
    }
}
export default TaskFilter;