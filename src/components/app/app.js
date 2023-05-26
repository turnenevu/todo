import React from "react";

import Footer from "../footer";
import TaskList from "../task-list";
import NewTaskForm from "../new-task-form";

import './app.css';

function searchIndex(arr, id) {
    return arr.findIndex(el => el.id === id);
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoData: [
                {label: 'Completed task', checked: false, edited: false, id: 1},
                {label: 'Editing task', checked: false, edited: false, id: 2},
                {label: 'Active task', checked: false, edited: false, id: 3},
            ],
            filter: 'All',
        };
        this.addItem = this.addItem.bind(this);
        this.edited = this.edited.bind(this);
        this.editItem = this.editItem.bind(this);
        this.clearChecked = this.clearChecked.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
    }

    checked(props) {
        this.setState(({ todoData }) => {
            const index = searchIndex(todoData, props);
            const current = todoData.slice();
            current[index].checked = !current[index].checked;

            return { todoData:  current };
        })
    }

    deleteItem(props) {
        this.setState(({ todoData }) => {
            const index = searchIndex(todoData, props);
            const current = todoData.filter((item, idx) => idx !== index );

            return {
                todoData:  current
            };
        });
    }

    addItem(props) {
        this.setState(({ todoData }) => {
            let newId = 1;
            todoData.forEach( item => {
                if (item.id >= newId)
                    newId = item.id + 1;
            });

            return {
                todoData:  todoData.concat({ label: props, checked: false, edited: false, id: newId })
            };
        });
    }
    edited(props) {
        this.setState(({ todoData }) => {
            const index = searchIndex(todoData, props);
            const current = todoData.slice();
            if(!current[index].checked)
                current[index].edited = !current[index].edited;

            return { todoData:  current };
        })
    }

    editItem(id, value) {
        this.setState(({ todoData }) => {
            const index = searchIndex(todoData, id);
            const current = todoData.slice();
            current[index].label = value;

            return { todoData:  current };
        });
    }

    clearChecked() {
        this.setState(({ todoData }) => {
            const current = todoData.filter(item => !item.checked );
            return { todoData:  current };
        })
    }

    changeFilter(props) {
        this.setState({ filter:  props });
    }

    render() {
        const todoData = this.state.todoData;
        const filter = this.state.filter;

        return (
            <div className="todoapp">
                <NewTaskForm onAdded={this.addItem} />
                <div className="main">
                    <TaskList todos={todoData}
                              filter={filter}
                              onChecked={(props) => this.checked.bind(this, props)}
                              onDeleted={(props) => this.deleteItem.bind(this, props)}
                              onEdited={this.edited}
                              onEditItem={this.editItem} />
                </div>
                <Footer done={todoData} filter={filter} onCleared={this.clearChecked} changeFilter={this.changeFilter}/>
            </div>
        );
    }
}

export default App