import React from "react";

import "./task-filter.css";

class TaskFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: [
                {name: 'All', id: 1},
                {name: 'Active', id: 2},
                {name: 'Completed', id: 3}
            ],
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(...props) {
        const [name] = [...props];
        this.props.changeFilter(name);
    }

    render() {
        const buttons = this.state.filter.map(item => {
            const classNames = this.props.filter === item.name ? "selected" : null;

            return (
                <li key={item.id}>
                    <button type="button" className={classNames} onClick={this.handleClick.bind(this, item.name)}>{item.name}</button>
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