import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import pList from './data/ProductList';
import { Link, Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';

/*
  * ajax로 서버로부터 데이터 얻어오기
    1. 설치하기 : npm a axios
*/


function App() {
  let [clothes, setClothes] = useState(pList);

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

          </Nav>
        </Container>
      </Navbar>


  
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
    <Button variant="outline-secondary" onClick={() => {
      axios.get('https://raw.githubusercontent.com/professorjiwon/data/main/data2.json')
           .then(result =>{
              console.log(result.data);
           })
           .catch(() =>{
               console.log('실패');
           })

    }}>서버에서 데이터 가져오기</Button>
          </>
        }/>  
       
         <Route path='/detail/:index' element={<Detail clothes={clothes}/>}/>
         <Route path='*' element={<div>없는 페이지입니다</div>}/>
        
      </Routes>

    
    </div>
  );
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

export default App;
