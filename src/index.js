// React
import React from "react"
import ReactDOM from "react-dom"

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// App
import App from "./App"

// Global CSS
import './style.scss'

// RSW
import registerServiceWorker from './registerServiceWorker';

// Render the dom
ReactDOM.render( <App />, document.getElementById('root'));
registerServiceWorker();
