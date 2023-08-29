import './App.css';
import React from 'react';
import axios from "axios";

const HOST = 'http://127.0.0.1:8000/api/'

class App extends React.Component {
    state = {
            todos: []
        };

    componentDidMount() {
        this.getTodos();
    }

    getTodos() {
        axios
            .get(HOST)
            .then(res => {
                this.setState({ todos: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        return (
            <div>
                {this.state.todos.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.body}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;
