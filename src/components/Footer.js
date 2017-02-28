import React, { Component } from 'react';
import '../style/Footer.css';
import { Link } from 'react-router';

export default class Footer extends Component {
    render() {
        return <footer>
            <div className="about-block">
                <span>Даний веб-сервіс призначений для розміщення і популяції творів молодих авторів.
                    Бла бла бла бла бла бла бла бла бла бла бла бла бла бла. Бла бла бла бла бла бла бла бла бла бла.</span>
            </div>
            <div className="links-block">
                <ul>
                    {this.props.links.map((link, index) => <li key={index}>
                        <Link to={link.link} >{link.title}</Link>
                    </li>)}
                </ul>
            </div>
            <div className="copyright">
                <span>Made by Denik Yura</span>
            </div>
        </footer>
    }
}