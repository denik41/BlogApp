import React, { Component } from 'react';
import UserSample from './UserSample';
import '../style/Profile.css'

export default class Users extends Component {
    render() {
        return <div className="users-container">
            <UserSample />
            <UserSample />
            <UserSample />
            <UserSample />
            <UserSample />
        </div>
    }
}