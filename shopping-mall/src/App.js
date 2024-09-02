import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import pList from './data/ProductList';
import { Link, Route, Routes, useNavigate} from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';
import Cart from './pages/Cart';

function App() {
  let [clothes, setClothes] = useState(pList);
  let [page, setPage] = useState(2);

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
                <PListCol clothes={p} key={i}/>
              )
            })
          }
        </Row>
    </Container>
  
    <Button variant="outline-secondary" onClick={() => {
      axios.get(`https://raw.githubusercontent.com/professorjiwon/data/main/data${page}.json`)
           .then(result =>{
              console.log(result.data);
                setClothes([...clothes,...result.data]);
                setPage(page+1);

           })
           .catch(() =>{
               console.log('실패');
               alert('더이상 상품이 없습니다');
           })

    }}>서버에서 데이터 가져오기</Button>
          </>
        }/>  
       
         <Route path='/detail/:pid' element={<Detail clothes={clothes}/>}/>
         <Route path='/cart' element={<Cart />} />
         <Route path='*' element={<div>없는 페이지입니다</div>}/>
        
      </Routes>

    
    </div>
  );
}


function PListCol({clothes}) {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/detail/${clothes.id}`);
  }

  return (
    <>
        <Col lg={4} onClick={goDetail} style={{ cursor: 'pointer'}}>         
        <img src={`${process.env.PUBLIC_URL}/img/img${clothes.id}.jpg`} /> 
    
        <h4>{clothes.title}</h4>
        <p>{clothes.content}</p>
        <p>{clothes.price}</p>
      </Col>
    </>
  )
}

export default App;
