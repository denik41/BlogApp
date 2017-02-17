import React, { Component } from 'react';
import '../style/HeaderDescription.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

export default class HeaderDescription extends Component {
    onArrowClick(event) {
        let arrow = event.target;
        if ($(arrow).hasClass('arrow-left')) {

        }
    }

    componentWillMount() {
        const contentArr = ['Реєструйся у системі ведення блогів', 'Створюй свої блоги та розвивай свій контент', 'Спілкуйся з іншими користувачами та здобувай підписників'];
        this.listElements = contentArr.map((text, index) => {
            return <li key={index}>
                {text}
            </li>
        })
    }

    componentDidMount() {
        $(this.list).children().first().css('display', 'block');
    }

    render() {
        const onArrowClick = (event) => {
            const binded = this.onArrowClick.bind(this);
            return binded(event);
        };
        return <div className="header-app-description">
            <span className="glyphicon glyphicon-menu-left header-arrow arrow-left"
                  onClick={ onArrowClick }></span>
            <div className="header-slider">
                <ul className="slider-list" ref={(ul => this.list = ul)}>
                    {this.listElements}
                </ul>
            </div>
            <span className="glyphicon glyphicon-menu-right header-arrow arrow-right"
                  onClick={ onArrowClick }></span>
        </div>
    }
}