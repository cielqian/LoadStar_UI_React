import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import { fetchRegister } from '../../apis/auth'
import Logo from '../../components/logo';
import loginCss from './login.module.scss';

document.title = '创建账户';

class Register extends React.Component {
    render() {
        return (
            <div className="container">
                <div className={loginCss.login}>
                    <Logo></Logo>
                    <div className={loginCss.loginForm}>
                    <WrappedRegisterForm  />
                    </div>
                </div>
            </div>
        );
    }
}

class RegisterForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            account: '',
            password: ''
        };
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                
                fetchRegister(values.username, values.password);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
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
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className={loginCss.loginFormButton}>
                        Register
                    </Button>
                    Or 
                    <Link to="/login" style={{paddingLeft:'5px'}}>Login now!</Link>
                </Form.Item>
            </Form>
        )
    }
}
const WrappedRegisterForm = Form.create({ name: 'normal_register' })(RegisterForm);

export default Register;



