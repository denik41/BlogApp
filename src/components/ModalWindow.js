import React, { Component, PropTypes } from 'react';
import '../style/ModalWindow.css';
//import $ from 'jquery/dist/jquery';

export default class ModalWindow extends Component {

    closeModalWindow() {
        this.props.closeModalWindow();
        this.errSpan.textContent = '';
        this.passwordInput.value = '';
        this.loginInput.value = '';
    }

    onEntryBtnClick() {
        let login = this.loginInput.value;
        let password = this.passwordInput.value;
        if (login.replace(/ /g, '') === "" || password === "") {
            this.errSpan.textContent = 'Не введено логін або пароль!';
        }
        else {
            this.props.authUser(login, password);
            this.closeModalWindow();
            window.localStorage.setItem('login', login);
        }
    }

    render() {
        if (!this.props.isVisible) {
            return null;
        }
        console.log('ModalWindow rendered');

        return <div className="modal-container display-block"
            /*onClick={this.closeModalWindow.bind(this, event)}*/ ref={(div) => this.modalContainer = div}>
            <div className="modal-window" ref={(div) => this.modalWindow = div}>
                <div className="window-header">
                    Авторизація
                    <span className="modal-close" onClick={this.closeModalWindow.bind(this)}
                          ref={(span) => this.modalClose = span}>&times;</span>
                </div>
                <div className="window-content">
                    <label className="modal-label">Логін <input type="text" className="modal-input"
                                                                placeholder="Login"
                                                                ref={(input) => this.loginInput = input}/></label>
                    <label className="modal-label">Пароль <input type="password" className="modal-input"
                                                                 placeholder="Password"
                                                                 ref={(input) => this.passwordInput = input}/></label>
                    <span className="err-span" ref={(span) => this.errSpan = span}></span>
                    <button type="button" className="modal-entry-btn" onClick={this.onEntryBtnClick.bind(this)}>Вхід
                    </button>
                </div>
            </div>
        </div>
    }
}

ModalWindow.propTypes = {
    closeModalWindow: PropTypes.func.isRequired,
    authUser: PropTypes.func.isRequired
};