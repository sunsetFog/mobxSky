import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {StoresProvider, stores} from '@/store';
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLDivElement);

root.render(
    <BrowserRouter basename='/'>
        <StoresProvider value={stores}>
            <App />
        </StoresProvider>
    </BrowserRouter>
    // <HashRouter>
    //     <StoresProvider value={stores}>
    //         <App />
    //     </StoresProvider>
    // </HashRouter>
);
