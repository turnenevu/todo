import React from 'react';
import ReactDOM from 'react-dom/client';

import App from "./components/app";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/*
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }

    render() {
        return(
            <div>
                <h1>Hello World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

/!*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);*!/


// class Man extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isToggleOn: true,
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
//
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'Включено' : 'Выключено'}
//             </button>
//         );
//     }
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Man />);


class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
        };

    }

    handleClick = () => {
        this.setState({
            isToggleOn: !this.state.isToggleOn,
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'Включено' : 'Выключено'}
                </button>
            </div>
        );
    }
}

/!*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Toggle />);*!/

function UserGreeting() {
    return <h1>С возвращением!</h1>;
}

function GuestGreeting() {
    return <h1>Войдите, пожалуйста!</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Войти
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Выйти
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true,
        })
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false,
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginControl />);
*/













