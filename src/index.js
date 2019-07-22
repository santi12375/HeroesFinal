import React from 'react';  /*Importa react*/
import ReactDOM from 'react-dom'; 
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'; /*Paquete de enrutamiento de pagina web*/
import App from './App/App'; 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router><App /></Router>  /*Metodo que enruta a App*/
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
