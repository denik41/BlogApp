import React, { Component } from 'react';
import '../style/NotFound.css';
import { Link } from 'react-router';

export default class NotFound extends Component {
    render() {
        return <div className="not-found-container">
            <h1 className="not-found-title">Not Found 404</h1>
            <span className="not-found-message">Сторінки з даною адресою не існує. </span>
            <Link to="/" className="not-found-link">На головну...</Link>
        </div>
    }
}
