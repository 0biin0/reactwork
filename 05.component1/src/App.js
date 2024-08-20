import logo from './logo.svg';
import './App.css';

const user = {
  firstName : "Hong",
  lastName : "GilDong"
}
function Student(user) { //첫글자 대문자로 쓰면 함수로 인식
  return user.firstName + " " + user.lastName;
}
function App() {
  const isStudent = true;
  return (
    <div className="App">
      <h1>The Joeun React 2024</h1>
      <h3>component 실습</h3>

      {isStudent ? <h4>{Student(user)}님 환영합니다</h4> : <h4>학원생이 아닙니다</h4> }

      <Com1></Com1>
      <Com1/>
      <Com1/>
    </div>
  );
}

function Com1(){
  return(
  <>
    <h2>[THIS IS COMPONENT]</h2>
    <p>K-Digital Training</p>
    <p>의료용 AI 연동 개발 실무 프로젝트</p>
    <ul>
      <li>Java</li>
      <li>SpringBoot</li>
      <li>component 실습</li>
    </ul>
  </>
  );
}

export default App;
