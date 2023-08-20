/*
    用于跳转
    这里方式1，不是全局的
    方式2: react-router-dom版本6 全局注入history
*/
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

export default history;
