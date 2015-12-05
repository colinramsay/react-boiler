/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/react-router/react-router.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, Link, History } from 'react-router';

class One extends React.Component<any, any> {
    render() {
        return <p><Link to="two">ONE</Link></p>;
    }
}

class Two extends React.Component<any, any> {
    render() {
        return <p><Link to="/">TWO</Link></p>
    }
}

class Home extends React.Component<any, any> {
    render() {
        return <p><Link to="one">Home</Link></p>
    }
}

class App extends React.Component<any, any> {
    render() {  
        return <div>
            {this.props.children}
        </div>
    }
}

const routes = <Router>
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="one" component={One} />
        <Route path="two" component={Two} />
    </Route>
</Router>

ReactDOM.render(routes, document.querySelector('.container'));