import React, { Component } from 'react';
import './../style/App.css';
import Navbar from './Navbar';
import ModalWindow from './ModalWindow';
import HeaderDescription from './HeaderDescription'
import { connect } from 'react-redux';

class App extends Component {


    render() {
        return (
            <div>
                <ModalWindow visibility={this.props.modalWindowIsVisible} closeModalWindow={this.props.closeModalWindow}
                             authUser={this.props.authUser} />
                <Navbar user={this.props.user} onEntryBtnClick={this.props.onEntryBtnClick} />
                <HeaderDescription />
                {this.props.children}
            </div>
        )
    }
}


export default connect(
    state => ({
        modalWindowIsVisible: state.modalWindowIsVisible,
        user: state.user
    }),
    dispatch => ({
        onEntryBtnClick: () => {
            dispatch({
                type: 'SHOW_MODAL_WINDOW'
            })
        },
        closeModalWindow: () => {
            dispatch({
                type: 'CLOSE_MODAL_WINDOW'
            })
        },
        authUser: (login, pass) => {
            const user = {
                login: login,
                password: pass
            };
            dispatch({
                type: 'AUTH_USER',
                payload: user
            })
        }
    })
)(App);
