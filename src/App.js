/*eslint-disable*/

import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0); //0으로 초기화
  let posts = '시드니 고기 맛집';


  return (
    <div className="App">
      {/* blog: Nav */}
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={()=> { 따봉변경(따봉+1) }}>👍 </span>{따봉}</h3>
        <p>10월 26일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>10월 26일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>10월 26일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
