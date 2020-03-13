import React from 'react';
import { View, Button, Text, ScrollView, StyleSheet } from 'react-native'
import { Constants } from 'expo'

let id = 0

const styles = StyleSheet.create({
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

const Todo = props => (
    <View style={styles.todoContainer}>
        <Button onPress={props.onDelete} title="Delete"></Button>
        <Text>{props.todo.text}</Text>
    </View>
)

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
        }
    }

    addTodo() {
        id++
        const text = `TODO number ${id}`
        this.setState({
            todos: [
                ...this.state.todos,
                {id: id, text: text, checked: false},
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
            <View style={{paddingTop: 20, margin: 20}}>
                <Text>Todo count: {this.state.todos.length}</Text>
                <Text>Unchecked todo count: {this.state.todos.filter(todo => !todo.checked).length}</Text>
                <Button onPress={() => this.addTodo()} title="Add TODO"></Button>
                <ScrollView>
                    {this.state.todos.map(todo => (
                        <Todo
                            onToggle={() => this.toggleTodo(todo.id)}
                            onDelete={() => this.removeTodo(todo.id)}
                            todo={todo}
                        />
                    ))}
                </ScrollView>
            </View>
        )
    }
}

export default App;
