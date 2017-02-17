import React, { Component } from 'react';
import '../style/Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

export default class Navbar extends Component {

    onEntryBtnClick() {
        this.props.onEntryBtnClick();
    }

    onDropdownClick() {
        $(this.dropdown).slideToggle(400, () => {
            if ($(this.dropdown).css('display') !== 'none') {
                $(document).click((event) => {
                    $(document).off('click');
                    if (event.target !== this.dropdown && event.target !== this.dropdownIcon) {
                        $(this.dropdown).slideUp(400);
                    }
                })
            }
        });
    }

    render() {
        console.log('Navbar rendered');
        const { user } = this.props;
        const dropdown = (
            <ul className="dropdown-list" ref={(ul) => this.dropdown = ul}>
                <li><a href="">Профіль</a></li>
                <li><a href="">Мої твори</a></li>
                <li><a href="">Вийти</a></li>
            </ul>
        );

        const onUserUnauth =
            <div className="buttons-block">
                <span className="auth-btn" onClick={this.onEntryBtnClick.bind(this)}>Увійти</span>
                <a className="sign-btn">Реєстрація</a>
            </div>;

        const dropdownIcon = <span className="dropdown-title glyphicon glyphicon-user"
                                   onClick={this.onDropdownClick.bind(this)}
                                   ref={(span) => this.dropdownIcon = span}></span>;

        return (
            <nav>
                <ul className="links-container">
                    <li><a href="/">Головна</a></li>
                    <li><a href="/about">Про нас</a></li>
                    <li><a href="/blogers">Автори</a></li>
                </ul>
                <div className="user-block">
                    <span className="user-greeting">Hello, {user.login ? user.login : 'Guest'}</span>
                    {user.login ? dropdownIcon : onUserUnauth}
                    {user.login ? dropdown : ''}
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    user: React.PropTypes.shape({
        login: React.PropTypes.string
    }),
    onEntryBtnClick: React.PropTypes.func.isRequired
};