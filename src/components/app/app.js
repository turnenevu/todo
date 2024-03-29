import React from 'react';

import Footer from '../footer';
import TaskList from '../task-list';
import NewTaskForm from '../new-task-form';

import './app.css';

function searchIndex(arr, id) {
  return arr.findIndex((el) => el.id === id);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [],
      filter: [
        { name: 'All', selected: true, id: 1 },
        { name: 'Active', selected: false, id: 2 },
        { name: 'Completed', selected: false, id: 3 },
      ],
      timer: [],
    };
    this.addItem = this.addItem.bind(this);
    this.edited = this.edited.bind(this);
    this.editItem = this.editItem.bind(this);
    this.clearChecked = this.clearChecked.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.onPause = this.onPause.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  onPlay(id) {
    this.setState(({ timer, todoData }) => {
      const indexTodo = searchIndex(todoData, id);
      const currentTodo = todoData.filter((item, idx) => idx === indexTodo);
      if (currentTodo[0].checked) return {};

      const index = searchIndex(timer, id);
      const current = [...timer];
      current[index] = { ...current[index], active: true };

      return { timer: current };
    });
  }

  onPause(id) {
    this.setState(({ timer }) => {
      const index = searchIndex(timer, id);
      const current = [...timer];
      current[index] = { ...current[index], active: false };

      return { timer: current };
    });
  }

  tick() {
    this.setState(({ timer }) => {
      const current = [...timer].map((item) => (item.active ? { ...item, time: item.time + 1 } : { ...item }));
      return { timer: current };
    });
  }

  checked(id) {
    this.setState(({ todoData }) => {
      const index = searchIndex(todoData, id);
      const current = [...todoData];
      current[index] = { ...current[index], checked: !current[index].checked };

      return { todoData: current };
    });
    this.onPause(id);
  }

  deleteItem(id) {
    this.setState(({ todoData, timer }) => {
      const indexTodo = searchIndex(todoData, id);
      const indexTimer = searchIndex(timer, id);

      const currentTodo = todoData.filter((item, idx) => idx !== indexTodo);
      const currentTimer = timer.filter((item, idx) => idx !== indexTimer);
      return {
        todoData: currentTodo,
        timer: currentTimer,
      };
    });
  }

  addItem(label, min, sec) {
    this.setState(({ todoData, timer }) => {
      let newId = 1;
      todoData.forEach((item) => {
        if (item.id >= newId) newId = item.id + 1;
      });

      const time = Number(min) * 60 + Number(sec);

      return {
        todoData: todoData.concat({
          label,
          date: new Date(),
          checked: false,
          edited: false,
          id: newId,
        }),
        timer: timer.concat({
          id: newId,
          time,
          active: false,
        }),
      };
    });
  }

  edited(id) {
    this.setState(({ todoData }) => {
      const index = searchIndex(todoData, id);
      const current = [...todoData];
      if (!current[index].checked) current[index] = { ...current[index], edited: !current[index].edited };

      return { todoData: current };
    });
  }

  editItem(id, value) {
    this.setState(({ todoData }) => {
      const index = searchIndex(todoData, id);
      const current = [...todoData];
      current[index] = { ...current[index], label: value };

      return { todoData: current };
    });
  }

  clearChecked() {
    this.setState(({ todoData }) => {
      const current = todoData.filter((item) => !item.checked);
      return { todoData: current };
    });
  }

  changeFilter(id) {
    this.setState(({ filter }) => {
      const selectedFilter = filter.filter((item) => item.selected);
      const before = searchIndex(filter, selectedFilter[0].id);
      const after = searchIndex(filter, id);

      const current = [...filter];
      current[before] = { ...current[before], selected: !current[before].selected };
      current[after] = { ...current[after], selected: !current[after].selected };

      return { filter: current };
    });
  }

  render() {
    const { ...state } = this.state;
    const selectedFilter = state.filter.filter((item) => item.selected);
    const { name } = selectedFilter[0];
    const todoData = state.todoData.filter((item) => {
      if (name === 'All') {
        return item;
      }
      if (name === 'Active' && !item.checked) {
        return item;
      }
      if (name === 'Completed' && item.checked) {
        return item;
      }

      return null;
    });

    const { filter } = state;
    const done = state.todoData.filter((item) => !item.checked).length;

    return (
      <div className="todoapp">
        <NewTaskForm onAdded={this.addItem} />
        <div className="main">
          <TaskList
            todos={todoData.reverse()}
            timer={state.timer}
            onChecked={(props) => this.checked.bind(this, props)}
            onDeleted={(props) => this.deleteItem.bind(this, props)}
            onEdited={this.edited}
            onEditItem={this.editItem}
            onPlay={(props) => this.onPlay.bind(this, props)}
            onPause={(props) => this.onPause.bind(this, props)}
          />
        </div>
        <Footer
          done={done}
          selectedFilterName={name}
          filter={filter}
          onCleared={this.clearChecked}
          changeFilter={this.changeFilter}
        />
      </div>
    );
  }
}

export default App;
