import { Component } from 'react';
import { ReactRouter, Router, Route, Link, hashHistory } from 'react-router';


class RouterApp extends Component {

    render() {
        const element =
            <Router history={hashHistory}>
                <Route path="/" component={Content}>
                    <Route path="/about" component={Content} />
                    <Route path="/posts" component={Content} />
                    <Route path="/posts/:id" component={Content} />
                    <Route path="/contact" component={Content} />
                </Route>
                <Route path="/login" component={Login} />
            </Router>
    }
}