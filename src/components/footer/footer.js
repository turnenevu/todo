import React from 'react';

import TaskFilter from '../task-filter/task-filter';

import './footer.css';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { done, filter, selectedFilterName, ...props } = this.props;

    return (
      <div className="footer">
        <span className="todo-count">{done} items left</span>
        <TaskFilter name={selectedFilterName} filter={filter} changeFilter={props.changeFilter} />
        <button type="button" className="clear-completed" onClick={props.onCleared}>
          Clear completed
        </button>
      </div>
    );
  }
}
