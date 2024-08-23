import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import pList from './data/ProductList';
import { Link, Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';
//import { num1, num2, pList } from './data/ProductList';

/*
  * react-router-dom
  - 기존의 페이지 나누기
    만약 /detail로 접속하면 기존의 index.html파일을 모두 비운 후 페이지를 보여줌
  - 페이지를 교체시켜주는 api : router-dom

  * 실행순서
   1. 설치 : npm i react-router-dom
   2. index.js 파일에서 <BrowserRouter></BrowserRouter>
*/

function App() {
  let [clothes, setClothes] = useState(pList);
  // 페이지의 이동을 도와주는 함수
  let navigate = useNavigate();
  return (
    <div className="App">
     <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={() => {navigate('/cart')}}>Cart</Nav.Link>

            {/* <Nav.Link onClick={() => {navigate(1)}}>앞으로 이동</Nav.Link>
            <Nav.Link onClick={() => {navigate(-1)}}>뒤로 이동</Nav.Link> */}

          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">홈</Link>&emsp;
      <Link to="/detail">상세페이지</Link> */}
  
      <Routes>
        
        <Route path='/' element={
          <>
          <div className='main-bg' />
          <br />

          <Container>
      <Row>
          { 
            clothes.map((p, i)=>{
              return(
                <PListCol clothes={p} i={i+1}/>
              )
            })
          }
        </Row>
    </Container>
          </>
        }/>  
        {/* <Route path='/detail' element={<Detail clothes={clothes}/>}/>   하나의 페이지  */}

        {/* <Route path='/detail' element={<Detail clothes={clothes}/>}/> */}

         {/* path에 파라미터로 넘겨줄 수 있음
              path='/detail/:작명'
              */}
         <Route path='/detail/:index' element={<Detail clothes={clothes}/>}/>

         {/* 파라미터를 여러개 넘겨주기 */}
         <Route path='/detail/:index/:member' element={<Detail clothes={clothes}/>}/>
         <Route path='/detail/:index/name/:member' element={<Detail clothes={clothes}/>}/>

        <Route path='/cart' element={<div>장바구니</div>}/>

        {/* <Route path='/about' element = {<About />} />
        <Route path='/about/member' element = {<div>사람의 정보</div>} />
        <Route path='/about/location' element = {<div>강남대로</div>} /> */}

      {/* NestedRoutes ~~의 하위의 것들을 하위요소로 넣어서 페이지 보여주기 */}
          <Route path='/about' element={<About/>}>
          <Route path='member' element = {<div>사람의 정보</div>} />
          <Route path='location' element = {<div>강남대로</div>} />
          </Route>
        <Route path='*' element={<div>
      <img 
        src={`${process.env.PUBLIC_URL}/img/angry.jpg`}
        style={{ Width: '1000px', height: '500px' }} 
      />
      <p>없는 페이지입니다</p>
    </div>}/>
        
      </Routes>


     {/*{num1} {num2}*/}

    
    </div>
  );
}
function About() {
  return(
    <>
      <Outlet></Outlet>
      <h4>회사 정보들</h4>
      <p>더조은 회사</p>
      
    </>
  )
  
}

function PListCol(props) {
  return (
    <>
      <Col lg={4}>
        <img src={`${process.env.PUBLIC_URL}/img/img${props.i}.jpg`} />
        <h4>{props.clothes.title}</h4>
        <p>{props.clothes.price}</p>
      </Col>
    </>
  )
}
/*
  매우 작은 기기(모바일) - xs{} 너비가 768px 미만인 화면
  작은 기기(태블릿) - sm{} 너비가 992px 미만인 화면
  중간 기기(노트북) - md{} 너비가 1280px 미만인 화면
  큰 기기(데스크탑) - lg{} 너비가 1200px 이상인 화면

  - 한 행에 12개의 열을 가진다 (중간 기기 이상일 때)
  <Col md={4}> -> 12중 4개 차지
  <Col md={4}> -> 8중 4개 차지
  <Col md={2}> -> 4중 2개 차지
  <Col md={2}> -> 2중 2개 차지

*/ 

export default App;
