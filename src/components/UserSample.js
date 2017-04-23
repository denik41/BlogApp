import React, { Component } from 'react';
import '../style/Profile.css';

export default class UserSample extends Component {
    render() {
        return <div className="user-sample-block">
            <div>
                <img src="" className="user-sample-avatar" />
                <div className="user-sample-rate">Rate: 4</div>
            </div>
            <div>
                <div>user user</div>
                <div>Кількість творів</div>

            </div>
        </div>
    }
}