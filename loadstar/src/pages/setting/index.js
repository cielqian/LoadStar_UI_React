import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { removeToken } from '../../redux/actions/auth'

class Setting extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout(e){
        e.preventDefault();
        this.props.dispatch(removeToken())
        window.location.href = "/login";
    };
    render() {
        return (
            <div>
                <Row type="flex" justify="center">
                    <Col span={8} style={{textAlign:'center'}}>
                        <Button onClick={this.logout} style={{width:'240px'}} ghost type="danger" block>
                                退出
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
};

export default withRouter(connect()(Setting));