import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import PopupUnit from '@/@energy/@pcDesign/components/popupUnit';

function cabbageUnit(props: any) {
    useEffect(() => {});
    return (
        <section>
            <PopupUnit>自定义弹窗</PopupUnit>
        </section>
    );
}

export default compose(observer)(cabbageUnit);
