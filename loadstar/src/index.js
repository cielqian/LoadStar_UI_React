import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
