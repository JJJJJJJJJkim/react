/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'post name';

  let [postTitle, b] = useState(['와인 추천','한강 데이트','강아지 산책']);
  let [title, setTitle] = useState(0);
  let [logo, setlogo] = useState('Vinhos');
  
  let [good, jj] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{ logo }</h4>
      </div>
        <button onClick={()=>{
          let copy = [...postTitle];
          copy.sort();
          b(copy);
        }}>가나다순정렬</button>
        {
          postTitle.map((a, i)=>{
            return (
              <div className="list" key={i}>
                <h4 onClick={()=>{setTitle(i); setModal(true)}}>{ postTitle[i] }<span onClick={()=>{
                    let copy = [...good];
                    copy[i] +=1;
                    jj(copy);
                  }}>👍</span> { good[i] }</h4>
                <p>8월 02일 발행</p>
              </div>
            )
          })
        }
        
        {
           modal == true ? <Modal title={title} postTitle={postTitle} color={'pink'}/> : null
        }

    </div>
  );
}

function Modal(props){
  return (
    <div className='modal' style={{background : props.color}}>
      <h4>{props.postTitle[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
