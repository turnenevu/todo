import React from 'react';

import './task-filter.css';

class TaskFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.changeFilter(id);
  }

  render() {
    const { filter, name } = this.props;
    const buttons = filter.map((item) => {
      const classNames = name === item.name ? 'selected' : null;
      return (
        <li key={item.id}>
          <button type="button" className={classNames} onClick={this.handleClick.bind(this, item.id)}>
            {item.name}
          </button>
        </li>
      );
    });

    return <ul className="filters">{buttons}</ul>;
  }
}
export default TaskFilter;
