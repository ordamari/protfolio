import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/styles/global.scss'

ReactDOM.render(
    <App />,
  document.getElementById('root')
)

serviceWorker.unregister();
