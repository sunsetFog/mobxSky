import React, { useState, useEffect, useRef } from 'react';
import { useSetState, useRequest } from 'ahooks';
import { useNavigate, NavLink, useLocation, useParams } from 'react-router-dom';
import LineTextLine from '@/components/lineTextLine/index';

function toJump(props) {
    const routerParams1 = useLocation();
    const routerParams2 = useParams();
    console.log('--跳转useLocation参数接收--', routerParams1);
    console.log('--跳转useParams参数接收--', routerParams2);

    const navigate = useNavigate();
    // const {history} = props;
    const toGo = () => {
        console.log('--toGo--');
        navigate('/home/hooks/toJump?title=6');
        // history.push('/home/hooks/toJump?title=6');
        // history.push({
        //     pathname: '/home/exRedux',
        //     state: { name: '白菜' },
        // })
    };
    return (
        <section>
            <LineTextLine>useNavigate跳转</LineTextLine>
            <button onClick={toGo}>跳转</button>
            <LineTextLine>NavLink标签跳转</LineTextLine>
            <NavLink to='/home/hooks/toJump?title=5'>跳转</NavLink>
        </section>
    );
}

export default toJump;
