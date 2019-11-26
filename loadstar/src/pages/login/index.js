import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import loginCss from './login.module.scss';
import Logo from '../../components/logo';
import { connect } from 'react-redux'
import { actions } from './redux'

class Login extends Component {
    constructor(props){
        super(props);
        document.title = '登录你的LoadStar账户';
    }
    render() {
        return (
            <div className="container">
                <div className={loginCss.login}>
                    <Logo></Logo>
                    <div className={loginCss.loginForm}>
                        <WrappedLoginForm  />
                    </div>
                </div>
            </div>
        );
    }
}

class LoginForm extends Component {
    handleSubmit = (e, _this) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({loading: true});
                this.props.dispatch(actions.login(values))
                

                // fetchLogin(values.username, values.password).then(res => {
                //     this.props.dispatch(saveToken(res.value)).then(res => {
                //         this.props.history.push('/home');
                //     });
                // }).catch(err => {
                //     message.error('账号或密码错误');  
                //     _this.setState({loading: false});
                // })
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={(e) => this.handleSubmit(e, this)}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username" disabled={this.props.loading}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password" disabled={this.props.loading}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox disabled={this.props.loading}>Remember me</Checkbox>)}
                    {/* <a className="login-form-forgot" href="">
                        Forgot password
                    </a> */}
                    <Button type="primary" disabled={this.props.loading} htmlType="submit" className={loginCss.loginFormButton}>
                        Log in
                    </Button>
                    Or 
                    <Link to="/register" style={{paddingLeft:'5px'}}>Register now!</Link>
                </Form.Item>
            </Form>
        )
    }
}

const WrappedLoginForm = withRouter(Form.create({ name: 'login_form' })(connect()(LoginForm)));

const mapStateToProps = (state) => {
    const stateObj = state.loadstar['auth'];
    return {
        token:stateObj.token
    };
};
export default connect(mapStateToProps)(Login);