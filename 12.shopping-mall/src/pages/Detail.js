import { useEffect, useState } from "react";
import { Nav, Container,Row, Button, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
/*
    탭 만들기
*/

function Detail (props) {

      let {index} = useParams();
      let findId = props.clothes.find(function(x) {
        return x.id == index;
      })
    
      let [alert, setAlert] = useState(true);    
      let [count, setCount] = useState(0);

      useEffect(() => {
       let timer = setTimeout(() => {setAlert(false)}, 1000)
        return () =>{
            // 기존 타이머 삭제
            clearTimeout(timer);
        }
        
      },[alert])
    // alert(은 재렌더링이 됨) 창 띄우기

    let [num, setNum] = useState('');
    useEffect(() => {
        if(isNaN(num) == true) { // Not a Number 숫자이면 false, 문자이면 true
            alert('그러지마요');
        }
    }, [num])

    return (
        <div>
            <input onChange={(e) => {setNum(e.target.value)}} />
            {alert ? <h2>2초 이내 구매시 할인</h2> : null}
            
            <Container>
            <Row>
                <Col lg={6}>
                    <img src={`${process.env.PUBLIC_URL}/img/img${findId.id+1}.jpg`} />
                </Col>
                <Col lg={6}>
                    <h4>{findId.title}</h4>
                    <p>{findId.content}</p>
                    <p>{findId.price}</p>
                    <Button variant="outline-secondary">주문하기</Button>
                </Col>
            </Row>
            </Container>

             <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0">Button 0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1">Button 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2">Button 2</Nav.Link>
                </Nav.Item>
            </Nav>

        </div>
    )
}

export default Detail;