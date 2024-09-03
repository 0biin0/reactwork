import { useEffect, useState } from "react";
import { Nav, Container,Row, Button, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import '../App.css'
import axios from "axios";


function Detail (props) {
  

      let {pid} = useParams();
      let findId = props.clothes.find(function(x) {
        return x.id == pid;
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


    let [tab, setTab] = useState(0);

    let[fade2, setFade2] = useState('start')
    
    useEffect(() => {
        setFade2('end')
    }, [])
    let navigate = useNavigate();

    return (
        <div>
            <input onChange={(e) => {setNum(e.target.value)}} />
            {alert ? <h2>2초 이내 구매시 할인</h2> : null}
            
            <Container className={fade2}>
            <Row>
                <Col lg={6}>
                    <img src={`${process.env.PUBLIC_URL}/img/img${findId.id}.jpg`} />
                </Col>
                <Col lg={6}>
                    <h4>{findId.title}</h4>
                    <p>{findId.content}</p>
                    <p>{findId.price}</p>
                    <Button variant="info" onClick={() => {
                        axios.post('/react/addCart', {id:findId.id, title:findId.title, count:1})
                             .then(result => {
                                console.log(result);
                                navigate('/cart');
                             })
                             .catch(error => {
                                console.log("실패", error);
                             })
                    }}>장바구니에 담기</Button>
                </Col>
            </Row>
            </Container>

             <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(0)}} eventKey="link0" >Button 0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(1)}} eventKey="link1">Button 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(2)}} eventKey="link2">Button 2</Nav.Link>
                </Nav.Item>
            </Nav>
            
           
            <TabContent tab={tab} /> 
        </div>

       

    )
}

    function TabContent({tab}) {
        let[fade, setFade] = useState('')

        useEffect(() => {
            setTimeout(() => {setFade('end')},100)  //0.1초 뒤 end
            return () => {
                setFade('start')
            }
        }, [tab])


        return(
         
        <div className={fade}>
             { [<div> 내용 0 </div>, <div> 내용 1 </div>, <div> 내용 2 </div> ][tab] }
        </div>
    )
   
}

export default Detail;