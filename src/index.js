import React, { Component } from 'react';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { ThemeSwitcher } from 'react-bootstrap-theme-switcher';


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
