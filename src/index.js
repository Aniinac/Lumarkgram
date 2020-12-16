import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {history, store} from "./store/configure"
import './index.css';
import App from './App';


ReactDOM.render(<App history={history} store={store}/>, document.getElementById('root'));


