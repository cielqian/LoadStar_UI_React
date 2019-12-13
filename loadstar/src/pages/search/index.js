import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as config from './config';

import { PageHeader, Table } from 'antd';

class Search extends Component {
    constructor(props) {
        super(props);
    }
    // componentDidMount() {
    //     let queryParam = this.props.location.query;
    //     if (queryParam&&queryParam.keyword) {
    //         this.props.dispatch(actions.fullTextSearch(queryParam.keyword));
    //         this.props.dispatch(actions.setValue('loading', false));
    //     }
    // }
    goBack(){
        this.props.history.push('/home');
    }
    formatHtml(content){
        return content + '<div></div>'
    };
    columns = [
        {
            title: 'Name',
            dataIndex: 'title',
            render: (text, record) => {
                return (
                    <div>
                        <a href={record.url} target="_blank" dangerouslySetInnerHTML={{__html:text}} ></a>
                    </div>
                )
            },
        }
    ];
    render() {
        return (
            <div>
                <PageHeader
                    onBack={() => this.goBack()}
                    title="Search Result"
                />
                <Table 
                    columns={this.columns} 
                    loading={this.props.loading}
                    dataSource={this.props.pageData} 
                    pagination={false} 
                    size="small" 
                    rowKey="id">
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const pageState = state.loadstar.pages[config.pageId];
    return Object.assign({}, pageState);
};

export default withRouter(connect(mapStateToProps)(Search));