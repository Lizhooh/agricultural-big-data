import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';

import './styles/index.scss';
import 'react-circular-progressbar/dist/styles.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
