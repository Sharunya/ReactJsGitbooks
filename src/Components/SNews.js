import React, {Component} from "react";
import PropTypes from "prop-types";
import CArticle from './CArticle'

export default class SNews extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        let data = this.props.data;
        let newsTemplate;
        if (data.length > 0) {
            newsTemplate = data.map(function (item) {
                return (
                    <div key={item.id}>
                        <CArticle data={item}/>
                    </div>
                )
            });
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }

        return (
            <div className="news">
                {newsTemplate}
                <strong className={'news__count ' + (data.length > 0 ? '' : 'none')}>
                    Всего новостей: {data.length}
                </strong>
            </div>
        );
    }
}