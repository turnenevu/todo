import React from 'react';
import { formatDistanceToNow, format } from 'date-fns';

import './task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { date, checked, id, label, timer, ...props } = this.props;
    const distanceDate = formatDistanceToNow(date, { includeSeconds: true });

    // const distanceTimeInterval = intervalToDuration({ start: 0, end: timer * 1000 });
    // const distanceTimeFormat = formatDuration(distanceTimeInterval, {
    //   format: ['hours', 'minutes', 'seconds'],
    //   zero: true,
    //   delimiter: ':',
    // });

    const helperDate = timer * 1000 + new Date(0).getTimezoneOffset() * 60 * 1000;
    let dateFormat = 'mm:ss';
    if (timer / 3600 >= 1) dateFormat = 'HH:mm:ss';
    const distanceTime = format(helperDate, dateFormat);

    return (
      <div className="view">
        <input className="toggle" type="checkbox" checked={checked} onChange={props.onChecked} id={id} />
        <label htmlFor={id}>
          <span className="title">{label}</span>
          <div className="description">
            <button type="button" className="icon icon-play" onClick={props.onPlay} />
            <button type="button" className="icon icon-pause" onClick={props.onPause} />
            <span className="timer">{distanceTime}</span>
          </div>
          <span className="created">created {distanceDate}</span>
        </label>
        <button type="button" className="icon icon-edit" onClick={props.onEdited} />
        <button type="button" className="icon icon-destroy" onClick={props.onDeleted} />
      </div>
    );
  }
}

export default Task;
