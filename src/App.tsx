import React from 'react';
import {useRoutes} from 'react-router-dom';
import Tab from '@/view/Tab';
import routes from '@/router';
import styles from '@/styles/index.modules.scss';

function App() {
    // 通过useRoutes配置实现路由管理
    const element = useRoutes(routes);
    return (
        <div className={styles.app}>
            <Tab />
            {element}
        </div>
    );
}

export default App;
