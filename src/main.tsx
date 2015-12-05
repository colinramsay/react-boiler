/// <reference path="../typings/react/react-global.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

class One extends React.Component<any, any> {
    render() {
        return <p>ONE</p>;
    }
}

class Two extends React.Component<any, any> {
    render() {
        return <p>TWO</p>
    }
}

interface AppState {
    count: number
}

class App extends React.Component<any, AppState> {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    }

    render() {  
        var groupStyle = {
          margin: '10px 0',
        };
    
        let rows = [];
    
        for(let i = 0; i < this.state.count; i++) {
          rows.push(<One />);
        }
    
        return <div>
            {rows}
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));