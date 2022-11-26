import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import './assets/styles/tailwind.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                <App />
            </MantineProvider>
        </BrowserRouter>
    </React.StrictMode>
);
