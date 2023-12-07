// React应该是底层在调用，得引入
import React, { useState, useEffect, useRef } from 'react';
import { useSetState, useRequest } from 'ahooks';
import { getInviteInfoReq } from './services';

function useRequestUnit(props) {
    /*
        run 是执行，不写表示自动执行
        data: httre  然后不需要onSuccess函数，表示result给值httre

        manual: true,
        手动 true  自动 false   好的判断  !!list.length
    */
    const { run: exchangeRun } = useRequest((sendingData = {}) => getInviteInfoReq(sendingData), {
        manual: true,
        onSuccess: (result: any) => {
            console.log('--onSuccess--', result);
        },
    });
    const peachWay = () => {
        exchangeRun({ id: 666 });
    };

    return (
        <section>
            <button
                onClick={() => {
                    peachWay();
                }}
            >
                调用接口
            </button>
        </section>
    );
}

export default useRequestUnit;
