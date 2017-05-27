'use strict';

//import $ from 'zepto';
import ReactDOM from 'react-dom';
import Header from './component/header';
import Home from './component/home';

const userName = userInfo.name;

ReactDOM.render(
    <div>
        <Header />
        <Home userName={userName} />
    </div>,
    document.getElementById('root')
);
