import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';

class Setting extends Component {
    render() {
        function logout(){
            window.location.href = "/login";
        };
        return (
            <div>
                <Row type="flex" justify="center">
                    <Col span={8} style={{textAlign:'center'}}>
                        <Button onClick={logout} style={{width:'240px'}} ghost type="danger" block>
                                退出
                        </Button>
                    </Col>
                </Row>

            </div>
        );
    }
};

export default withRouter(Setting);