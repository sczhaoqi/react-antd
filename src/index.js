import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
// 引入 store 
import store from './store/index';
// 引入路由配置组件
import Root from './router/routes';
// 引入全局配置
const history = require("history").createBrowserHistory;
const mountNode = document.getElementById('root');
/*
react-redux 提供 Provider 组件，
被 Provider 组件包裹的整个 APP 中的每个组件，都可以通过 connect 去连接 store 
*/
/* eslint-disable no-undef */
const publicPath = '/';
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename={publicPath}>
         <Root />
      </BrowserRouter>
   </Provider>,
   mountNode);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
