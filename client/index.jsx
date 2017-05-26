'use strict';

//import $ from 'zepto';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header';
import Home from './component/home';



ReactDOM.render(
    <div>
        <Header />
        <Home />
    </div>,
    document.getElementById('root')
);
