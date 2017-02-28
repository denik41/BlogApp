import React, { Component } from 'react';
import './../style/App.css';
import Navbar from '../components/Navbar';
import ModalWindow from '../components/ModalWindow';
import Footer from '../components/Footer';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        const modalWindow = <ModalWindow closeModalWindow={this.props.closeModalWindow}
                                         authUser={this.props.authUser}/>;

        return (
            <div className="app-container">
                {this.props.modalWindowIsVisible ? modalWindow : ''}
                <Navbar user={this.props.user} onEntryBtnClick={this.props.onEntryBtnClick}
                        navBarLinks={this.props.navBarLinks}/>
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
