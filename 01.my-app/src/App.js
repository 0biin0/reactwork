import logo from './logo.svg';
import './App.css';

function App() {
  /* 여러줄 주석 */
  // return이 한출일 때
  // return <h1>React 처음시작</h1>

  // return안이 여러줄 일 때
  /*
    1. 소괄호를 반드시 넣어준다
    2. 루트 태그를 반드시 넣어준다
  */
  return(//주석 이건 됨
    <>
    {/* 여러줄 일떄는 반드시 최상위 태그가 존재해야한다 return()뒤에는 주석 사용하면 안됨 바로 <> 표시 나와야됨*/}
      <h1>React</h1>
      <h2>여러줄 리턴</h2>
      {/* 주석 */}
    </>
  )
  
}

export default App;
