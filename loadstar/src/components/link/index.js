import React,{Component} from 'react';
import {Card} from 'antd'

class Link extends Component {
    render() {
        return (
            <Card title={this.props.name}>
                访问次数 ： 10
            </Card>
        );
    }
}

export default Link;