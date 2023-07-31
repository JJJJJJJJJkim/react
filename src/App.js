/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'post name';

  let [postTitle, b] = useState(['와인 추천','한강 데이트','강아지 산책']);
  
  let [logo, setlogo] = useState('Vinhos');
  
  let [good, jj] = useState(0);
  
  
  


  return (
    <div className="App">
      <div className="black-nav">
        <h4>{ logo }</h4>
      </div>
        <button onClick={()=>{
          let copy = [...postTitle];
          copy.sort((a,b)=> a > b ? 1 : -1);
          b(copy);
        }}>가나다순정렬</button>
        <div className="list">
          <span onClick={()=>{
              let copy = [...postTitle];
              copy[0] = '여자 코트 추천';
              b(copy);
          }}>🙏</span>
          <h4>{ postTitle[0] } <span onClick={()=>{ jj(good+1)} }>👍</span> { good } </h4>       
          <p>7월 31일 발행</p>
        </div><div className="list">
          <h4>{ postTitle[1] }</h4>       
          <p>8월 01일 발행</p>
        </div>
        <div className="list">
          <h4>{ postTitle[2] }</h4>       
          <p>8월 02일 발행</p>
        </div>
    </div>
  );
}

export default App;
