import {Container,Row, Button, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

/*
    lifeCycle(생명주기)
    컴포넌트
    1. 생성
*/

function Detail (props) {

      let {index} = useParams();
      let findId = props.clothes.find(function(x) {
        return x.id == index;
      })

    return (
        <div>
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
        </div>
    )
}

export default Detail;