//import App from './alidesign.js';
import LayOut from './LayOut.js';
import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.less";
import "./css/layOut.css"


function component() {
    var element = document.createElement('div');
    element.setAttribute("id", "root");
    return element;
}

document.body.appendChild(component());
ReactDOM.render(<LayOut/>, document.getElementById('root'));