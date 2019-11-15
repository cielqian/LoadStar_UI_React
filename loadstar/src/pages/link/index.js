import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './link.module.scss';
import { removeLink, fetchLinks } from '../../redux/actions/links'

import { Table, Button , Popconfirm} from 'antd'

class LinkManagement extends Component {
    componentDidMount(){
        this.props.dispatch(fetchLinks(this.props));
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
                                <Button type="danger" size="small">删除</Button>
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
                    columns={this.columns} dataSource={this.props.recentLinks} size="middle" 
                    pagination={{current:this.props.current, total:this.props.total}} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const stateObj = state.loadstar.links;
    const pageState = state.loadstar.linkPage;
    return Object.assign({}, pageState, {
        recentLinks: stateObj.recentLinks,
        hoverRowIndex: state.loadstar.common.hoverRowIndex
    });
};

export default connect(mapStateToProps)(LinkManagement)