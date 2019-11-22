import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions, reducerConfig } from './redux'

import { Tag, Input, Icon } from 'antd'
import MyTag from '../../components/tag'

class TagManagement extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(actions.fetchTags())
    }
    handleClose = id => {
        this.props.dispatch(actions.removeTag(id))
    };

    showInput = () => {
        this.props.dispatch(actions.setValue('inputVisible', true));
    };

    handleInputChange = e => {
        this.props.dispatch(actions.setValue('inputValue', e.target.value));
    };

    handleInputConfirm = () => {
        const { inputValue } = this.props;
        this.props.dispatch(actions.saveTag(inputValue));
        this.props.dispatch(actions.setValue('inputValue', ''));
        this.props.dispatch(actions.setValue('inputVisible', false));
    };

    saveInputRef = input => (this.input = input);
    render() {
        const { pageData, inputVisible, inputValue } = this.props;
        return (
            <div>
                {inputVisible && (
                    <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        style={{ width: 78 }}
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                    />
                )}
                {!inputVisible && (
                    <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                        <Icon type="plus" /> New Tag
                    </Tag>
                )}
                {pageData.map((tag, index) => {
                    const isLongTag = tag.length > 20;
                    const tagElem = (
                        <MyTag key={tag.id} closable onClose={e => {
                            e.preventDefault();
                            this.handleClose(tag.id);
                          }}>
                            {tag.name}
                        </MyTag>
                    );
                    return tagElem
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const pageState = state.loadstar.pages[reducerConfig.pageId];
    return Object.assign({}, pageState);
};

export default connect(mapStateToProps)(TagManagement)