import React, {useState} from 'react';
import {useRoutes} from 'react-router-dom';
// import Tab from '@/view/Tab';
import routes from '@/router';
import styles from '@/styles/index.modules.scss';
import SwitchRouter from '@/router/switch';

function App(props: any) {
    console.log('+++App+++', props, '---', props.children);
    const [routerActive, setRouterActive] = useState(true);
    // 通过useRoutes配置实现路由管理
    const element = useRoutes(routes);
    return (
        <div className={styles.app}>
            {/* <Tab /> */}
            {/* {element} */}
            {routerActive ? element : <SwitchRouter></SwitchRouter>}
        </div>
    );
}

export default App;
