import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './link.module.scss';
import { removeLink, fetchLinks } from '../../redux/actions/links'

import { Table, Button , Popconfirm} from 'antd'

class LinkManagement extends Component {
    constructor(props){
        super(props);
        this.onPageChange = this.onPageChange.bind(this);
    }
    componentDidMount(){
        const pagination = this.props.pagination;
        this.props.dispatch(fetchLinks(pagination));
    }
    onPageChange(page, pageSize){
        this.props.dispatch(fetchLinks({size:pageSize,current:page}));
    }
    onDeleteLink(link) {
        this.props.dispatch(removeLink(link));
    }
    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => {
                return (
                    <div>
                        <a href={record.url} target="_blank">{text}</a>
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
    return Object.assign({}, pageState, {
        hoverRowIndex: state.loadstar.common.hoverRowIndex
    });
};

export default connect(mapStateToProps)(LinkManagement)