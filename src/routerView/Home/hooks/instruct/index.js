import React, {useState, useEffect, useRef, useContext} from 'react';
// import { useHistory } from 'react-router'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LineTextLine from '@/components/lineTextLine/index';
import {useNavigate, useLocation} from 'react-router-dom';
// import {
//     HashRouter as Router,
//     Route,
//     Switch,
//     Redirect,
//     Link,
//     withRouter,
//     useHistory,
//     useSearchParams
// } from "react-router-dom";

function InstructUnit(props) {
    const [openBay, setOpenBay] = useState(false);
    const [listBay, setListBay] = useState([1, 5, 10]);
    const params = useLocation();
    console.log('useNavigate跳转，参数接收', params);

    console.log('--props--', props);
    // 报错：caught TypeError: (0 , _reactRouterDom.useSearchParams) is not a function
    // const [searchParams, setSearchParams] = useSearchParams()
    // console.log("--路由参数--", searchParams)

    const beanWay = () => {
        console.log('--beanWay--');
        setOpenBay(!openBay);
    };

    return (
        <section>
            <LineTextLine>类似v-if指令</LineTextLine>
            <button onClick={beanWay}>显示隐藏</button>
            {openBay && <span>--哈喽--</span>}
            <LineTextLine>类似v-for指令</LineTextLine>
            {listBay.map((item, index) => (
                <button key={index}>{item}</button>
            ))}
        </section>
    );
}

InstructUnit.defaultProps = {
    colors: '蓝色'
};

InstructUnit.propTypes = {
    colors: PropTypes.string
};

function mapStateToProps(params) {
    console.log('-mapStateToProps-', params);
    return {
        state: params.example
    };
}

// export default connect(mapStateToProps)(InstructUnit);
export default InstructUnit;
