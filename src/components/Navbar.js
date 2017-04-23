import React, { Component } from 'react';
import '../style/Navbar.css';
import $ from 'jquery';
import { Link } from 'react-router';

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

    onLogOutClick(event) {
        event.preventDefault();
        this.props.onLogOutClick();
    }

    render() {
        console.log('Navbar rendered');
        const { user } = this.props;
        const dropdown = (
            <ul className="dropdown-list" ref={(ul) => this.dropdown = ul}>
                <li><Link to="/profile" className="dropdown-list-link">Профіль</Link></li>
                <li><Link to="/compositions" className="dropdown-list-link">Мої твори</Link></li>
                <li><Link className="dropdown-list-link" onClick={this.onLogOutClick.bind(this)}>Вийти</Link></li>
            </ul>
        );

        const onUserUnauth =
            <div className="buttons-block">
                <span className="auth-btn" onClick={this.onEntryBtnClick.bind(this)}>Увійти</span>
                <Link to="/reg" className="sign-btn">Реєстрація</Link>
            </div>;

        const dropdownIcon = <span className="dropdown-title"
                                   onClick={this.onDropdownClick.bind(this)}
                                   ref={(span) => this.dropdownIcon = span}>&#9776;</span>;

        const links = this.props.navBarLinks.map((link, index) => {
                if (link.link === "/") {
                    return <li key={index}>
                        <Link to={link.link} onlyActiveOnIndex={true} activeClassName="active-link"
                              className="nav-link">{link.title}</Link>
                    </li>
                }
                return <li key={index}>
                    <Link to={link.link} activeClassName="active-link" className="nav-link">{link.title}</Link>
                </li>
            }
        );

        return (
            <nav>
                <ul className="links-container">
                    {links}
                </ul>
                <div className="user-block">
                    <span className="user-greeting">Hello, {user.isAuth ? user.login : 'Guest'}</span>
                    {user.isAuth ? dropdownIcon : onUserUnauth}
                    {user.isAuth ? dropdown : ''}
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