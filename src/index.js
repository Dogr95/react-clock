import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './main.jsx';

class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            string: "first"
        }
        this.updateText();
    }

    updateText() {
        setInterval(() => {
            let strArr = [];
            for(let i = 0; i < 8; i++) {
                strArr[i] = String.fromCharCode(Math.floor(Math.random()* 26) + 42);
            }
            this.setState({
                string: strArr.join("")
            })
            console.log("New string: "+this.state.string)
        }, 1000);
    }

    render() {
        const {string} = this.state;
        
        return (
            <div>
                <h1>😎</h1>
                <h1>{string}</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <Test name="test" />,
    document.getElementById("root")
)