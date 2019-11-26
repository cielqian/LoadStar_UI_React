import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {List} from 'antd';

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