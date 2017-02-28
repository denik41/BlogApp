import React, { Component } from 'react';
import HeaderDescription from './HeaderDescription';
import CompositionSample from './CompositionSample';
import '../style/Home.css';

export default class Home extends Component {
    render() {
        const description = ['Реєструйся у системі ведення блогів',
            'Створюй свої блоги та розвивай свій контент',
            'Спілкуйся з іншими користувачами та здобувай підписників'];
        return <div>
            <HeaderDescription description={description}/>
            <span className="popular-compositions-title">Популярні твори</span>
            <div className="popular-compositions-container">

            </div>
        </div>
    }
}
