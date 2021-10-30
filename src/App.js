/*eslint-disable*/

import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0); //0으로 초기화
  let posts = '시드니 고기 맛집';

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      {/* blog: Nav */}
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기} >Button</button>
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


      {
        // 중괄호안에 if 사용 불가.. -> 삼항연상자를 사용
        1 < 3 
        ? <Modal></Modal>
        : null // 텅빈 HTML
      }


    </div>
  );
}

// Component 만드는 법
// <> -> fragment
function Modal(){
  return (
    <> 
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App;
