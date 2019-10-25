import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Signin from './Container/Signin';
import Signup from './Container/Signup';
import Dashboard from './components/Dashboard';
import { Header } from './components/Header';

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Signin} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/dashboard" component={Dashboard} />
            </div>
        </BrowserRouter>
    );
}
export { Router };
