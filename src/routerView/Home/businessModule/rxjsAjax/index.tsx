import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import { lotteryRecord } from './services';

function rxjsAjax(props: any) {
    useEffect(() => {
        lotteryRecord({}).subscribe((result) => {
            console.log('--数据6--', result);
        });
    }, []);
    return <section>--rxjsAjax--</section>;
}

export default compose(observer)(rxjsAjax);
