/*
// 1. 별도의 파일로 style사용
import './App.css';

function App() {
  return (
    <>
      <h1>더조은에 오신것을 환영합니다</h1>
      <h3>의료용 디지털 영상 표준 활용 실무 프로젝트 과정</h3>
      <p className="class1">react style적용하기</p>
      <p id="id1">id로 style적용하기</p>
    </>

  );

}
*/
/*
// 2. style을 변수에 객체로 저장하여 사용
function App() {
  const style = {
    div : {
      backgroundColor : 'yellowgreen',
      padding : '50px',
      textAlign : 'center',
      fontSize : '30px'
    },
    h1 : {
      color : "white"
    },
    class1 : {
      color : 'yellow'
    },
    id1 : {
      color : 'green'
    }

  }
  return (
    <div style={style.div}>
      <h1 style={style.h1}>더조은에 오신것을 환영합니다</h1>
      <h3>의료용 디지털 영상 표준 활용 실무 프로젝트 과정</h3>
      <p  style={style.class1}>react style적용하기</p>
      <p  style={style.id1}>id로 style적용하기</p>
    </div>

  );

}
*/

function App() {
  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{color:'red', backgroundColor:'black'}}>더조은에 오신것을 환영합니다</h1>
      <h3>의료용 디지털 영상 표준 활용 실무 프로젝트 과정</h3>
      <p>react style적용하기</p>
      <p>id로 style적용하기</p>
    </div>

  );
}
export default App;
