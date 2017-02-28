import React, { Component } from 'react';
import '../style/HeaderDescription.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

export default class HeaderDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
        this.onArrowClick = this.onArrowClick.bind(this);
    }

    componentDidMount() {
        $(this.sliderContent).fadeIn(600);
    }

    componentWillUpdate() {
        $(this.sliderContent).hide();

    }

    componentDidUpdate() {
        $(this.sliderContent).fadeIn(600);
    }

    onArrowClick(event) {
        let arrow = event.target;
        let textArr = this.props.description;
        if ($(arrow).hasClass('arrow-left')) {
            if (this.state.currentIndex === 0) {
                this.setState({currentIndex: textArr.length - 1});
            } else {
                this.setState({currentIndex: this.state.currentIndex - 1})
            }
        } else {
            if (this.state.currentIndex === (textArr.length - 1)) {
                this.setState({currentIndex: 0});
            } else {
                this.setState({currentIndex: this.state.currentIndex + 1})
            }
        }
    }

    render() {
        return <div className="header-app-description">
            <span className="glyphicon glyphicon-menu-left header-arrow arrow-left"
                  onClick={ this.onArrowClick }></span>
            <div className="header-slider">
                <span className="slider-content"
                      ref={(span) => this.sliderContent = span}>{this.props.description[this.state.currentIndex]}</span>
            </div>
            <span className="glyphicon glyphicon-menu-right header-arrow arrow-right"
                  onClick={ this.onArrowClick }></span>
        </div>
    }
}