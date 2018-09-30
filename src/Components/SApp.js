import React, {PureComponent} from "react";
import CAdd from "./CAdd";
import SNews from "./SNews";
import myNews from '../resources/myNews'

export default class SApp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            news: myNews
        }
    }


    componentDidMount() {
        const self = this;
        window.ee.on('SNews.add', function (item) {
            const nextNews = item.concat(self.state.news);
            self.setState({news: nextNews});
        });
    }

    componentWillUnmount() {
        window.ee.off('SNews.add');
    }

    render() {
        console.log('render');
        return (
            <div className='app'>
                <CAdd/>
                <h3>Новости</h3>
                <SNews data={this.state.news}/>
            </div>
        );
    }
}