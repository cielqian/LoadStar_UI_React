import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import {Input, Icon} from 'antd';
import style from './searcher.module.scss'
import TrackService from '@trackService';
import { actions } from './redux';

class Searcher extends Component {
    constructor(props) {
        super(props);
    }
    fullSearch(e) {
        TrackService.record({pageId:'home',ctrlId:'searcher', eventType:'click'});
        this.props.dispatch(actions.fullTextSearch(e.target.value));
        this.props.history.push({pathname:'/home/search',query:{keyword:e.target.value}});
    };
    render() {
        return (
            <Input className={style.searcher} onPressEnter={e => this.fullSearch(e)}
                placeholder="Enter your keyword for search"
                allowClear
                prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
        )
    }
}

export default withRouter(connect()(Searcher));