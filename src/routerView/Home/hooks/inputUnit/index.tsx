// React应该是底层在调用，得引入
import React, { useState, useEffect, useRef } from 'react';
import { useSetState, useRequest } from 'ahooks';
import LineTextLine from '@/components/lineTextLine/index';

function inputUnit(props) {
    const [intActive, setIntOfActive] = useState(false);
    const [intDef, setIntOfDef] = useState('嘿嘿');
    const intRef = useRef();
    const peachWay = () => {
        setIntOfActive(true);
        /*
            第一次intRef.current是undefined，不能用intRef.current.value来回显的
            解决方法：使用defaultValue赋值
         */
        if (intRef.current) {
            intRef.current.value = '画好';
        } else {
            setIntOfDef('墨明');
        }
        console.log('--intRef.current--', intRef.current);
    };
    const [inputValue, setInputValue] = useState('哈哥');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <section>
            <LineTextLine>不可控input</LineTextLine>
            {intActive && <input type='text' ref={intRef} defaultValue={intDef} />}
            <br />
            <br />
            <button
                onClick={() => {
                    peachWay();
                }}
            >
                显示input
            </button>
            <LineTextLine>可控input</LineTextLine>
            <input type='text' value={inputValue} onChange={handleChange} />
        </section>
    );
}

export default inputUnit;
