import React, { useEffect, useRef, useState } from 'react';
// import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import WebsocketUnit from '@/@energy/ivoryDesign/@higherOrder/websocketUnit';

function redEnvelope(props: any) {
    console.log('--红包雨--', props);
    useEffect(() => {
        props?.initWebsocket();
    }, []);
    return <section>红包雨</section>;
}

export default compose(WebsocketUnit)(redEnvelope);
