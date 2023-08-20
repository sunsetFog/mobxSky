import React, {useEffect, useState} from 'react';
import {useNavigate, Outlet, useLocation} from 'react-router-dom';
import CX from 'classnames';
import {observer} from 'mobx-react-lite';

import styles from './index.modules.scss';
import {getDialogConfig, getInviteInfoReq} from './services';
import {useRequest} from 'ahooks';

function Home() {
    const navigate = useNavigate();
    const params = useLocation();
    const {pathname} = params;

    const [activeLink, setActiveLink] = useState<string>(pathname);

    const handleClickLink = (link: string) => {
        setActiveLink(link);
        navigate(link);
    };
    useRequest(getInviteInfoReq, {});

    useEffect(() => {
        getDialogConfig();
    }, []);

    const homeClasses = CX('home-root', {
        'home-root-no-bg': activeLink === 'home'
    });

    return (
        <div className={styles[homeClasses]}>
            <div
                className={styles['home-tab']}
                onClick={() => {
                    // handleClickLink('about');
                    handleClickLink('/home/reactClass/attrBind');
                }}
            >
                "Hello Home"
            </div>
            {/* Outlet支持嵌套路由 */}
            <Outlet />
        </div>
    );
}

export default observer(Home);
