import React, { Component } from 'react';
import './../style/App.css';
import Navbar from '../components/Navbar';
import ModalWindow from '../components/ModalWindow';
import Footer from '../components/Footer';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { showModalWindow, hideModalWindow } from '../actions/modalWindowActions';
import { authUser, unAuthUser } from '../actions/userActions';

class App extends Component {
    render() {
        console.log('App rendered');
        return (
            <div className="app-container">
                <ModalWindow isVisible={this.props.modalWindowIsVisible} closeModalWindow={this.props.closeModalWindow}
                             authUser={this.props.authUser} />
                <Navbar user={this.props.user} onEntryBtnClick={this.props.onEntryBtnClick}
                        navBarLinks={this.props.navBarLinks} onLogOutClick={this.props.unAuthUser} />
                <div className="page-container">
                    {this.props.children}
                </div>
                <Footer links={this.props.navBarLinks} />
            </div>
        )
    }
}

export default connect(
    state => ({
        modalWindowIsVisible: state.modalWindowIsVisible,
        user: state.user,
        navBarLinks: state.navBarLinks
    }),
    dispatch => ({
        onEntryBtnClick: () => {
            dispatch(showModalWindow());
        },
        closeModalWindow: () => {
            dispatch(hideModalWindow());
        },
        authUser: (login, pass) => {
            dispatch(authUser(login, pass));
        },
        unAuthUser: () => {
            dispatch(unAuthUser());
        }
    })
)(App);
