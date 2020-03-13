import React from 'react';
import logo from './logo.svg';
import './App.css';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    increaseCount() {
        this.setState(prevState => ({count: prevState.count + 1}))
        this.setState(prevState => ({count: prevState.count + 1}))
    }

    render() {
        return (
            <div style={styles}>
                <div>
                    <button onClick={() => this.increaseCount()}>Increase</button>
                </div>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}

export default App;
