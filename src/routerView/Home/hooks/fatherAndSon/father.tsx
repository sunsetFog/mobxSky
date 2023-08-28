import React, {useState, useEffect, useRef, useContext, createContext, createRef} from 'react';

import Son from './son';
import LineTextLine from '@/components/lineTextLine/index';

function Father(props) {
    let refHolder = useRef<any>(createRef());
    const cartoon = () => {
        refHolder.current.rewardInfo(true);
    };
    return (
        <section>
            <LineTextLine>父组件</LineTextLine>
            <button onClick={cartoon}>父调子方法</button>
            <Son onRef={refHolder}></Son>
        </section>
    );
}

export default Father;
