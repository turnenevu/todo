import React from "react";
import { formatDistanceToNow } from "date-fns";

import './task.css';

class Task extends React.Component {

    render() {
        const date = formatDistanceToNow(this.props.date, {includeSeconds: true});
        return (
            <div className="view">
                <input className="toggle"
                       type="checkbox"
                       checked={this.props.checked}
                       onChange={this.props.onChecked}
                       id={this.props.id} />
                <label htmlFor={this.props.id}>
                    <span className="description">{this.props.label}</span>
                    <span className="created">created {date}</span>
                </label>
                <button className="icon icon-edit" onClick={this.props.onEdited}></button>
                <button className="icon icon-destroy" onClick={this.props.onDeleted}></button>
            </div>
        );
    }
}

export default Task;