import React from 'react';

import './new-task-form.css';

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    const [label, min, sec] = [...e.target].map((item) => item.value);

    if (label.trim() !== '') {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.onAdded(label, min, sec);

      e.target.reset();
      e.target[0].focus();
    }

    e.preventDefault();
  }

  render() {
    return (
      <div className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={this.handleKeyDown}>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus />
          <input className="new-todo-form__timer" placeholder="Min" type="number" />
          <input className="new-todo-form__timer" placeholder="Sec" type="number" />
          <button type="submit" />
        </form>
      </div>
    );
  }
}

export default NewTaskForm;
