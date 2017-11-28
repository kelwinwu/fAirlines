import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Contact from './components/Login/Login';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App}>
            <Route path="/Login" component={Contact}/>
            <Route path = "/Home" component={Home}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);

export default Routes;
