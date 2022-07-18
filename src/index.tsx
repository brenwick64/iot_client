import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import App from './App';

// Creates "static" WS client
const client = new W3CWebSocket('ws://localhost:8000')

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App client={client} />
  </React.StrictMode>
);
