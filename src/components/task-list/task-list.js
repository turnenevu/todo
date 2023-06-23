import React from 'react';

import Task from '../task';
import './task-list.css';

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.editButtonClick = this.editButtonClick.bind(this);
    this.editInputChange = this.editInputChange.bind(this);
    this.closeInputChange = this.closeInputChange.bind(this);
  }

  editButtonClick(id) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onEdited(id);
  }

  editInputChange(id, e) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onEditItem(id, e.target.value);
  }

  closeInputChange(id, e) {
    if (e.key === 'Enter') {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.onEdited(id);
    }
  }

  render() {
    const { todos, ...props } = this.props;
    const elements = todos.map((item) => {
      const { id, checked, edited, label, date } = item;
      const editInput = (
        <input
          type="text"
          className="edit"
          autoFocus
          value={item.label}
          onChange={this.editInputChange.bind(this, id)}
          onKeyDown={this.closeInputChange.bind(this, id)}
        />
      );

      // eslint-disable-next-line no-nested-ternary
      const classNames = checked ? 'completed' : edited ? 'editing' : null;

      return (
        <li key={id} className={classNames}>
          <Task
            id={id}
            label={label}
            date={date}
            checked={checked}
            onChecked={props.onChecked(id)}
            onDeleted={props.onDeleted(id)}
            /* eslint-disable-next-line react/jsx-no-bind */
            onEdited={this.editButtonClick.bind(this, id)}
          />

          {edited ? editInput : null}
        </li>
      );
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}

export default TaskList;
