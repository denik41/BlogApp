import React, { Component } from 'react';

export default class Admin extends Component {
    static onEnter(nextState, replace) {
        if (window.localStorage.getItem('login') !== 'admin') {
            replace('/');
        }
    }

    render() {
        return <div>
            admin
        </div>
    }
}