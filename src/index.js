import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

let cssStyle = { };


let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';

if(curDate>= 1 && curDate < 12){
  greeting = "Good Morning...!"
  cssStyle.color = "green"
}else if(curDate>= 12 && curDate < 20){
  greeting = "Good Afternoon...!";
  cssStyle.color = "orange"
}else{
  greeting = "Good night"
  cssStyle.color = "gray"
}

ReactDOM.render(
  <h1>Hello sir, <span style={cssStyle}> {greeting}</span> </h1>,
  document.getElementById('root')
)