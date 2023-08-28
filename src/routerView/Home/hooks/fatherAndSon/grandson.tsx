import React, {useState, useEffect, useRef, useContext, createContext, createRef} from 'react';
import LineTextLine from '@/components/lineTextLine/index';
function Grandson(props) {
    return (
        <section>
            <LineTextLine>孙子组件</LineTextLine>
        </section>
    );
}

export default Grandson;
