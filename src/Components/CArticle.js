import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class CArticle extends PureComponent {
    static propTypes = {
        data: PropTypes.shape({
            author: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            bigText: PropTypes.string.isRequired
        })
    };

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    readmoreClick = (e) => {
        e.preventDefault();
        this.setState({visible: true});
    };

    render() {
        const {author, text, bigText} = this.props.data;
        let visible = this.state.visible; // считываем значение переменной из состояния компонента

        return (
            <div className='article'>
                <p className='news__author'>{author}:</p>
                <p className='news__text'>{text}</p>
                <a href="#readmore"
                   onClick={this.readmoreClick}
                   className={'news__readmore ' + (visible ? 'none' : '')}>
                    Подробнее
                </a>
                <p className={'news__big-text ' + (visible ? '' : 'none')}>{bigText}</p>
            </div>
        )
    }
}