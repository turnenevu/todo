import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import './task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { date, checked, id, label, ...props } = this.props;
    const distanceDate = formatDistanceToNow(date, { includeSeconds: true });
    return (
      <div className="view">
        <input className="toggle" type="checkbox" checked={checked} onChange={props.onChecked} id={id} />
        <label htmlFor={id}>
          <span className="description">{label}</span>
          <span className="created">created {distanceDate}</span>
        </label>
        <button type="button" className="icon icon-edit" onClick={props.onEdited} />
        <button type="button" className="icon icon-destroy" onClick={props.onDeleted} />
      </div>
    );
  }
}

export default Task;
