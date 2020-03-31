import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBBox, MDBBtn, MDBListGroup, MDBListGroupItem } from "mdbreact";
import './index.css';
import './App.css';

let id = 0

const Todo = props => (
    <MDBListGroupItem>
        <input onChange={props.onToggle} type="checkbox" checked={props.todo.checked} />
        <MDBBtn color="danger" onClick={props.onDelete}>Delete</MDBBtn>
        <span>{props.todo.text}</span>
    </MDBListGroupItem>
)

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
        }
    }

    addTodo() {
        const text = prompt("TODO text please!")
        this.setState({
            todos: [
                ...this.state.todos,
                {id: id++, text: text, checked: false},
            ],
        })
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    toggleTodo(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id !== id) return todo
                return {
                    id: todo.id,
                    text: todo.text,
                    checked: !todo.checked,
                }
            })
        })
    }

    render() {
        return (
            <MDBContainer>
                <MDBBox tag="p">Todo count: {this.state.todos.length}</MDBBox>
                <MDBBox tag="p">Unchecked todo count: {this.state.todos.filter(todo => !todo.checked).length}</MDBBox>
                <MDBBtn onClick={() => this.addTodo()}>Add TODO</MDBBtn>
                <MDBListGroup>
                    {this.state.todos.map(todo => (
                        <Todo
                            onToggle={() => this.toggleTodo(todo.id)}
                            onDelete={() => this.removeTodo(todo.id)}
                            todo={todo}
                        />
                    ))}
                </MDBListGroup>
            </MDBContainer>
        )
    }
}

export default App;
