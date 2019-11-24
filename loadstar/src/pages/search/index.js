import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { PageHeader } from 'antd';

import { actions } from './redux';

class Search extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let queryParam = this.props.location.query;
        if (queryParam&&queryParam.keyword) {
            this.props.dispatch(actions.fullTextSearch(queryParam.keyword));
        }
    }
    goBack(){
        this.props.history.push('/home');
    }
    render() {
        return (
            <div>
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}
                    onBack={() => this.goBack()}
                    title="Search Result"
                />
            </div>
        );
    }
}

export default withRouter(connect()(Search));