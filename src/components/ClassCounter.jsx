import React from "react";

class ClassCounter extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({count: ++this.state.count})}>increment</button>
                <button onClick={() => this.setState({count: --this.state.count})}>decrement</button>
            </>
        );
    }
}

export default ClassCounter;