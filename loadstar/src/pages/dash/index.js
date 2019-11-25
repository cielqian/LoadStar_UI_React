import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {List} from 'antd';
import _Link from '../../components/link'

class Dash extends Component {
    render() {
        return (
            <div></div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
    };
};


export default withRouter(connect(mapStateToProps)(Dash));