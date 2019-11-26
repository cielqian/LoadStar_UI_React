import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Drawer, Form, Input, Button, message, Tag } from 'antd';
import {analysisLink} from '../../apis/link'
import * as utils from '../../utils/util'
import { hiddenDrawer } from '../../redux/actions/common'
import GroupSelectTag from '../tag'
import {actions} from './redux';
import {pageId} from './config';
const { Search } = Input;
const {CheckableTag} = Tag;

class BookmarkDrawer extends Component {
    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
        this.props.dispatch(actions.fetchTags());
    }
    componentDidMount(){
    }
    onClose = () => {
        this.props.dispatch(hiddenDrawer());
    };
    render() {
        return (
            <Drawer
                title="New Bookmark"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.props.drawerVisiable}
                width="450px"
            >
                <WrappedBookmarkForm></WrappedBookmarkForm>
            </Drawer>
        )
    }
}

class BookmarkForm extends Component {
    constructor(props) {
        super(props);
        this.onUrlChanged = this.onUrlChanged.bind(this);
    }
    componentDidMount(){
    }
    state = {
        analysising: false
    }
    submitSaveLink(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (utils.isUrl(values.url)) {
                    this.props.dispatch(actions.saveLink(values))
                } else {
                    message.warning('仅支持http和https协议');
                }
            }
        });
    }
    onUrlChanged(e) {
        this.setState({ analysising: true });
        const { value } = e.target;
        analysisLink(value).then((res) => {
            const data = res.data;
            this.setState({ analysising: false });
            this.props.form.setFieldsValue({
                "name": data.title
            })
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={(e) => this.submitSaveLink(e, this)}>
                <Form.Item>
                    {getFieldDecorator('url', {
                        rules: [{ required: true, message: 'Please input url!' }],
                    })(
                        <Search prefix={<Icon type="api" />} placeholder="url" onChange={this.onUrlChanged} enterButton={false} loading={this.state.analysising} />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input name!' }],
                    })(
                        <Input
                            prefix={<Icon type="tag" />}
                            placeholder="name" disabled={this.props.loading}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('selectedTags')(
                    <GroupSelectTag tags={this.props.tags}>
                      </GroupSelectTag>
                    )}
                </Form.Item>
                <Form.Item style={{ textAlign: 'center' }}>
                    <Button type="primary" disabled={this.props.loading} htmlType="submit" style={{ width: '220px' }}>
                        Save
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    const globalState = state.loadstar.global;
    const pageState = state.loadstar.pages[pageId];
    return {
        drawerVisiable: globalState.drawerVisiable,
        tags: pageState.tags
    };
};

const WrappedBookmarkForm = Form.create()(connect(mapStateToProps)(BookmarkForm));

export default connect(mapStateToProps)(BookmarkDrawer)