import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {store} from "./store/configure"
import './index.css';
import App from './App';


ReactDOM.render(<App store={store}/>, document.getElementById('root'));


