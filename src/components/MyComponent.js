import React, { Component } from "react";

class MyComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { number: 5 }
        this.addNumber = this.addNumber.bind(this);

        console.log("constructor...");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps...");
        console.log(props)
        console.log(state)
        return null
    }

    componentDidMount() {
        console.log("componentDidMount...");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate...")
        console.log('actual state: ', this.state)
        console.log('next state: ', nextState)

        return true; // if false, the component will not update
    }

    componentDidUpdate() {
        console.log("componentDidUpdate...");
    }

    addNumber = () => {
        console.log('setState...');
        let actualNumber = this.state.number;
        actualNumber++;
        this.setState({ number: actualNumber });
    }

    render() {
        console.log("render...");
        return (
            <div>
                <p>{this.props.title}</p>
                <p>{this.state.number}</p>
                <button onClick={this.addNumber}>
                    Add number
                </button>
            </div>
        );
    }
}

export default MyComponent; 