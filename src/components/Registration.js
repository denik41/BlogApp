import React, { Component } from 'react';
import '../style/Registration.css';

export default class Registration extends Component {

    onSubmit() {
        console.log('adfadsf');
    }

    render() {
        return <div className="reg-page">
            <div className="reg-title">Реєстрація</div>
            <div className="reg-form">
                <p className="reg-form-description">
                    Для користування можливостями даного веб-ресурсу, неодхідно пройти коротку реєстрацію. Для того, щоб
                    просто передивлятись твори авторів - реєстація не є обовязковою. Поля, які помічені зіркою,
                    обов'язкові для заповнення.
                </p>
                <div>
                    <label>*Ім'я:<input type="text" className="reg-form-input-text" placeholder="Ім'я" required
                                        form="reg-form" name="firstName"/></label>
                    <label>*Прізвище:<input type="text" className="reg-form-input-text" placeholder="Прізвище" required
                                            form="reg-form" name="secondName"/></label>
                    <label>*Логін:<input type="text" className="reg-form-input-text" placeholder="Логін" required
                                         form="reg-form" name="login"/></label>
                    <label>*E-mail:<input type="email" className="reg-form-input-text" placeholder="E-mail" required
                                          form="reg-form" name="email"/></label>
                    <label>Про себе:<textarea className="reg-form-textarea" autoComplete="off" maxLength="1000"
                                              form="reg-form" name="aboutSelf"/></label>
                    <label>Посилання на соц. мережі:<textarea className="reg-form-textarea" maxLength="500"
                                                              form="reg-form" name="socialsLinks"/></label>
                    <button type="submit" className="reg-form-sign-btn" form="reg-form" onSubmit={this.onSubmit}>Sign in</button>
                </div>
            </div>
        </div>
    }
}