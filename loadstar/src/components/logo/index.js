import React from 'react';
import logo from '../../assets/logo.png';
import logoCss from './logo.module.scss';

class Logo extends React.Component {
    render() {
        return (
            <div className={logoCss.logo}>
                <img src={logo} className={logoCss.miniLogo} alt="logo" />
                <span>LoadStar</span>
            </div>
        );
    }
}

export default Logo;
