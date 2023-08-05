/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const post = 'post name';
  const [postTitle, setPostTitle] = useState(['와인 추천', '한강 데이트', '강아지 산책']);
  const [title, setTitle] = useState(0);
  const [logo, setlogo] = useState('Vinhos');
  const [good, setGood] = useState([0, 0, 0]);
  const [isModal, setModal] = useState(false);



  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <button onClick={() => {
        const copy = [...postTitle];
        copy.sort();
        setPostTitle(copy);
      }}>가나다순정렬</button>

      {
        postTitle.map((a, i) => {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                setTitle(i); setModal(true);
              }}>{postTitle[i]}
                <span onClick={(e) => {
                  const copy = [...good];
                  copy[i] += 1;
                  setGood(copy);
                  e.stopPropagation();
                }}>👍</span> {good[i]}<button onClick={(e)=>{
                  const copy = [...postTitle];
                  const goodCopy = [...good];

                  copy.splice(i, 1);
                  setPostTitle(copy);
                  e.stopPropagation();
                  isModal == true ? setModal(false) : null;

                  goodCopy.splice(i, 1);
                  setGood(goodCopy);
                }}>글삭제</button></h4>
              <p>8월 02일 발행</p>
            </div>
          )
        })
      }

      {
        isModal == true ? <Modal title={title} postTitle={postTitle} color={'pink'} /> : null
      }

      <label>
        <input></input>
        <button onClick={(e)=>{
          const newPostTitle = e.target.previousSibling.value;
          const copy = [...postTitle];
          const goodCopy = [...good];

          copy.push(newPostTitle);
          setPostTitle(copy);
          
          goodCopy.push(0);
          setGood(goodCopy);
        }}>글쓰기</button>
      </label>
      
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal' style={{ background: props.color }}>
      <h4>{props.postTitle[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
