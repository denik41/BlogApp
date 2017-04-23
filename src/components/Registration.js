import React, { Component } from 'react';
import '../style/Registration.css';
import $ from 'jquery';

export default class Registration extends Component {

    onSubmit(event) {
        event.preventDefault();
        const data = $(this.form).serialize();
        $.post('/reg', data, (data, status, xhr) => {
            console.log(data);
            console.log(status);
            console.log(xhr);
        });
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
                    <form id="regForm" onSubmit={this.onSubmit.bind(this)} ref={(form) => this.form = form} >
                        <label>*Ім'я:<input type="text" className="reg-form-input-text" placeholder="Ім'я" required
                                            form="regForm" name="firstName" maxLength="50"/></label>
                        <label>*Прізвище:<input type="text" className="reg-form-input-text" placeholder="Прізвище"
                                                required
                                                form="regForm" name="secondName" maxLength="40"/></label>
                        <label>*Логін:<input type="text" className="reg-form-input-text" placeholder="Логін" required
                                             form="regForm" name="login" maxLength="40"/></label>
                        <label>*E-mail:<input type="email" className="reg-form-input-text" placeholder="E-mail" required
                                              form="regForm" name="email" maxLength="100"/></label>
                        <label>Про себе:<textarea className="reg-form-textarea" autoComplete="off" maxLength="1000"
                                                  form="regForm" name="aboutSelf" /></label>
                        <label>Посилання на соц. мережі:<textarea className="reg-form-textarea" maxLength="500"
                                                                  form="regForm" name="socialsLinks"/></label>
                        <label>*Пароль:<input type="password" className="reg-form-input-text" placeholder="Пароль"
                                              required
                                              form="regForm" name="password" maxLength="50"/></label>
                        <button type="submit" className="reg-form-sign-btn" form="regForm">Реєстрація</button>
                    </form>
                </div>
            </div>
        </div>
    }
}