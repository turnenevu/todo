import React from "react";

import TaskFilter from "../task-filter/task-filter";

import "./footer.css";

class Footer extends React.Component {

    render() {
        const done = this.props.done;
        const name = this.props.selectedFilterName;
        const filter = this.props.filter;

        return (
            <div className="footer">
                <span className="todo-count">{done} items left</span>
                <TaskFilter
                    name={name}
                    filter={filter}
                    changeFilter={this.props.changeFilter}
                />
                <button className="clear-completed" onClick={this.props.onCleared}>Clear completed</button>
            </div>
        );
    }
}

export default Footer;