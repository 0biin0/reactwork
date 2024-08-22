import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);
  let [title, setTitle] = useState(["초밥", "찬란한 아구", "역전우동"]);
  return (
    <div className="App">
      <h2 className="title">맛집 추천 INSTAR</h2>
      {/*<button onClick={() => {setTitle('청담등심');}}>글수정</button> => 원본이 바뀜 */}
      <button onClick={() => {
        let copy = title;
        copy[0] = "청담등심";
        setTitle(copy);
        }}>글수정</button>
      <div className="list">
        <h4>{title[0]}</h4>
        <p>8월 22일  <span onClick={() =>(setCount(count+1))}>🍽</span>{count}</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>8월 17일  <span>🍽</span>0</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>7월 27일  <span>🍽</span>0</p>
      </div>
    </div>
  );
}

export default App;
