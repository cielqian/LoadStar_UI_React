import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from './redux';


class Dash extends Component {
    componentDidMount(){
        this.props.dispatch(actions.fetchDashLinks());
    }
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