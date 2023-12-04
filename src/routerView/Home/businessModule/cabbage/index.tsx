import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import PopupUnit from '@/@energy/@pcDesign/components/popupUnit';
import { convertCanvasToImage } from '@/@energy/@utils/html2canvas';

function cabbageUnit(props: any) {
    useEffect(() => {});
    return (
        <section>
            <PopupUnit>自定义弹窗</PopupUnit>
            <br />
            <br />
            <button
                id='toImg'
                onClick={() => {
                    convertCanvasToImage(document.getElementById('toImg'));
                }}
            >
                元素转成图片
            </button>
        </section>
    );
}

export default compose(observer)(cabbageUnit);
