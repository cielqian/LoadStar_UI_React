import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './link.module.scss';
import {actions} from './redux';
import TrackService from '@trackService';
import { Table, Button , Popconfirm} from 'antd'

class LinkManagement extends Component {
    constructor(props){
        super(props);
        this.onPageChange = this.onPageChange.bind(this);
    }
    componentDidMount(){
        const pagination = this.props.pagination;
        this.props.dispatch(actions.fetchLinks(pagination));
    }
    onPageChange(page, pageSize){
        this.props.dispatch(actions.fetchLinks({size:pageSize,current:page}));
    }
    onDeleteLink(link) {
        this.props.dispatch(actions.removeLink(link));
    }
    onOpenLink(link){
        TrackService.record({pageId:'link',ctrlId:'item', eventType:'click'});
        window.open(link.url)
    }
    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => {
                return (
                    <div>
                        <span className={styles.linkDisplay} onClick={() => this.onOpenLink(record)}>{text}</span>
                        <div className={styles.linkOperate}>
                            <Popconfirm
                                title="Are you sure?"
                                onConfirm={() => this.onDeleteLink(record)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button type="link" size="small">删除</Button>
                            </Popconfirm>
                        </div>
                    </div>)
            },
        }
    ];
    render() {
        return (
            <div>
                <Table onRow={(record, index) => {
                    return {
                        onMouseEnter: event => {
                            const { dispatch } = this.props;
                            dispatch({
                                type: 'linkManage/upState',
                                payload: {
                                    hoverIndex: index
                                },
                            });
                        },
                        onMouseLeave: event => { },
                        };
                    }}
                    rowClassName={(record, index) => {
                        const { hoverRowIndex } = this.props;
                        return index === hoverRowIndex ? styles.rowActive : "";
                    }}
                    columns={this.columns} dataSource={this.props.pageData} size="small" rowKey="id"
                    pagination={{current:this.props.pagination.current, 
                    pageSize: this.props.pagination.size,
                    total:this.props.pagination.total,
                    onChange:this.onPageChange}} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const pageState = state.loadstar.pages.linkPage;
    const globalState = state.loadstar.global;
    return Object.assign({}, pageState, {
        hoverRowIndex: globalState.hoverRowIndex
    });
};

export default connect(mapStateToProps)(LinkManagement)