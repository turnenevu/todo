import React from 'react';

import './new-task-form.css';

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.onAdded(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <div className="header">
        <h1>todos</h1>
        <form className="new-todo-form">
          <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={this.handleKeyDown} />
          <input className="new-todo-form__timer" placeholder="Min" autoFocus />
          <input className="new-todo-form__timer" placeholder="Sec" autoFocus />
        </form>
      </div>
    );
  }
}

export default NewTaskForm;
