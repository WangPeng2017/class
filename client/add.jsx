'use strict';

import { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header';
import InputNewClass from './component/inputNewClass';
const userName = userInfo.name;



ReactDOM.render(
    (<div>
        <Header />
        <div style={{marginBottom: '100px'}}></div>
        <InputNewClass userName={userName} />
    </div>),
    document.getElementById('root')
);
