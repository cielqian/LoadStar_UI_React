import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, Route, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon, Input, Row } from 'antd';
import { showDrawer } from '../../redux/actions/common'
import homeCss from './home.module.scss';

import SearchResult from '../search';
import SettingManagement from '../setting';
import DashPanel from '../dash';
import LinkManagement from '../link';
import TagManagement from '../tag';

import BookmarkDrawer from '../../components/bookmarkDrawer';
import Searcher from '../../components/searcher'
const { Header, Sider, Content, Footer } = Layout;

document.title = 'LoadStar';

class Home extends Component {
    constructor(props) {
        super(props);
        this.openDrawer = this.openDrawer.bind(this);
    }
    componentDidMount() {
        this.props.history.location.pathname = '/home/dash';
    }
    state = {
        collapsed: false,
        selectedKeys: [],
        visible: false
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    openDrawer() {
        this.props.dispatch(showDrawer());
    };
    render() {
        return (
            <Layout className='home' style={{ height: "100%" }}>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        {
                            !this.state.collapsed ? (<div className={homeCss.slogan}>LoadStar</div>) : null
                        }
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home/dash']} selectedKeys={this.props.history.location.pathname}>
                            <Menu.Item key="/home/dash">
                                <Link to="/home/dash">
                                    <Icon type="windows" />
                                    <span>Dash</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="/home/link">
                                <Link to="/home/link">
                                    <Icon type="compass" />
                                    <span>Link</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="/home/tag">
                                <Link to="/home/tag">
                                    <Icon type="book" />
                                    <span>Tag</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="/home/setting">
                                <Icon type="setting" />
                                <span>Setting</span>
                                <Link to="/home/setting"></Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Row>
                                <Icon
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                                <Icon className={homeCss.launch} onClick={this.openDrawer} type="thunderbolt" />
                                <Searcher></Searcher>
                            </Row>
                        </Header>
                        <Content>
                            <Route path="/home/dash" exact component={DashPanel} />
                            <Route path="/home/link" exact component={LinkManagement} />
                            <Route path="/home/tag" exact component={TagManagement} />
                            <Route path="/home/setting" exact component={SettingManagement} />
                            <Route path="/home/search" exact component={SearchResult} /> 
                            {/* {
                                this.props.routes.map((item, index) => {
                                    return <Route path={item.path} component={item.component} />
                                })
                            } */}
                        </Content>
                        <BookmarkDrawer></BookmarkDrawer>
                        <Footer style={{ textAlign: 'center' }}>LoadStar ©2019 Created by CielQian</Footer>
                    </Layout>
                </Layout>
        );
    }
};

export default withRouter(connect()(Home));