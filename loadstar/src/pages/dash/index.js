import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {List} from 'antd';
import _Link from '../../components/link'

class Dash extends Component {
    render() {
        return (
            <List
                grid={{ gutter: 16, column: 6 }}
                dataSource={this.props.recentLinks}
                renderItem={item => (
                <List.Item>
                    <_Link key={item.id} {...item}></_Link>
                </List.Item>
                )}
            />
        );
    }
};

const mapStateToProps = (state) => {
    const stateObj = state.loadstar.links;
    return {
        recentLinks :stateObj.recentLinks
    };
};


export default withRouter(connect(mapStateToProps)(Dash));