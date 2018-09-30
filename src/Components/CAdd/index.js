import React, {PureComponent} from "react";
import {findDOMNode} from "react-dom";
import './style.css'

export default class CAdd extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true
        }
    }


    componentDidMount() {
        findDOMNode(this.refs.author).focus();
    }

    onBtnClickHandler = (e) => {
        e.preventDefault();
        const author = findDOMNode(this.refs.author).value;

        const textEl = findDOMNode(this.refs.text);
        let text = textEl.value;

        const item = [{
            id: +new Date(),
            author: author,
            text: text,
            bigText: '...'
        }];

        window.ee.emit('SNews.add', item);

        textEl.value = '';
        this.setState({textIsEmpty: true});
    };

    onCheckRuleClick = (e) => {
        this.setState({agreeNotChecked: !this.state.agreeNotChecked}); //устанавливаем значение в state
    };

    onFieldChange(fieldName, e) {
        if (e.target.value.trim().length > 0) {
            this.setState({['' + fieldName]: false})
        } else {
            this.setState({['' + fieldName]: true})
        }
    }

    render() {
        const agreeNotChecked = this.state.agreeNotChecked,
            authorIsEmpty = this.state.authorIsEmpty,
            textIsEmpty = this.state.textIsEmpty;
        return (
            <form className='add cf'>
                <input
                    type='text'
                    className='add__author'
                    onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
                    placeholder='Ваше имя'
                    ref='author'
                />
                <textarea
                    className='add__text'
                    onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
                    placeholder='Текст новости'
                    ref='text'
                />
                <label className='add__checkrule'>
                    <input type='checkbox' ref='checkrule' onChange={this.onCheckRuleClick}/>Я согласен с правилами
                </label>

                <button
                    className='add__btn'
                    onClick={this.onBtnClickHandler}
                    ref='alert_button'
                    disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}
                >
                    Опубликовать новость
                </button>
            </form>
        );
    }
}