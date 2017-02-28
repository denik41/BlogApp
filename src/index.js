import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './containers/App';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Registration from './components/Registration';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/about" component={About} />
                <Route path="/reg" component={Registration} />

                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
