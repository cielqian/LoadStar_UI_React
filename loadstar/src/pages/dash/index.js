import React, { Component } from 'react';
import { Row, Col, Card, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './redux';
import * as config from './config';
import style from './dash.module.scss';
import TrackService from '@trackService';

class Dash extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(actions.fetchDashLinks());
    }
    onOpenLink(link) {
        TrackService.record({ pageId: 'dash', ctrlId: 'item', eventType: 'click' });
        window.open(link.url)
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <Card>
                            Hi~ {this.props.userInfo.username}，祝你开心每一天！
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginTop:'15px'}}>
                    <Col xl={24} xxl={18} >
                        <Card title="快速访问">
                            {
                                this.props.dashLinks.map((link) =>
                                    <Card.Grid onClick={() => this.onOpenLink(link)} 
                                        key={link.id} className={[link.style, style.gridStyle]}>
                                        <span>{link.title}</span>
                                    </Card.Grid>
                                )
                            }
                        </Card>
                    </Col>
                </Row>

            </div>
        );
    }
};

const mapStateToProps = (state) => {
    const pageState = state.loadstar.pages[config.pageId];
    const userInfo = state.loadstar.global.userInfo;
    return Object.assign({}, pageState, {userInfo: userInfo});
};


export default withRouter(connect(mapStateToProps)(Dash));