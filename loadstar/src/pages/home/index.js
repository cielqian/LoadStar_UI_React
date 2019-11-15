import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, HashRouter, Route, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon} from 'antd';
import { showDrawer } from '../../redux/actions/common'
import homeCss from './home.module.scss';
import Setting from '../setting';
import Dash from '../dash';
import LinkManagement from '../link';
import BookmarkDrawer from '../../components/link/bookmarkDrawer';


const { Header, Sider, Content, Footer } = Layout;

document.title = 'LoadStar';

class Home extends Component {
    constructor(props) {
        super(props);
        this.openDrawer = this.openDrawer.bind(this);
    }
    componentDidMount() {
        this.props.history.location.hash = "#/dash";

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
            <HashRouter>
                <Layout className='home' style={{ height: "100%" }}>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        {
                            !this.state.collapsed ? (<div className={homeCss.slogan}>LoadStar</div>) : null
                        }
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['#/dash']} selectedKeys={this.props.history.location.hash}>
                            <Menu.Item key="#/dash">
                                <Link to="/dash">
                                    <Icon type="windows" />
                                    <span>Dash</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="#/link">
                                <Link to="/link">
                                    <Icon type="compass" />
                                    <span>Link</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="#/setting">
                                <Icon type="setting" />
                                <span>Setting</span>
                                <Link to="/setting"></Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <Icon className={homeCss.launch} onClick={this.openDrawer} type="thunderbolt" />
                        </Header>
                        <Content>
                            {/* <Route path="/dash" component={Dash} />
                        <Route path="/link" component={Links} /> */}
                            <Route path="/" exact component={Dash} />
                            <Route path="/dash" component={Dash} />
                            <Route path="/link" component={LinkManagement} />
                            <Route path="/setting" component={Setting} />
                        </Content>
                        <BookmarkDrawer></BookmarkDrawer>
                        <Footer style={{ textAlign: 'center' }}>LoadStar ©2019 Created by CielQian</Footer>
                    </Layout>
                </Layout>
            </HashRouter>
        );
    }
};






export default withRouter(connect()(Home));