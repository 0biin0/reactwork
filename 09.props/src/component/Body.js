import Button from "./Button";
/*
import Body from './Body';
//1. 부모로부터 변수의 값 넘겨 받기
const Body = (props) => {
    return (
        <>
            <h3>본문입니다</h3>
            <p>{props.address}</p>
            <p>{props.user}</p>
        </>
    )
}
*/

/*
//2.1 객체형태로 넘겨준 값 받기
const Body = (props) => {
    return (
        <>
            <h3>본문입니다</h3>
            <p>{props.userInfo.name}님은 {props.userInfo.addr}에 살고 있습니다</p>
            <p>내가 좋아하는 것들은 {props.userInfo.likeList}의 {props.userInfo.likeList.length}개를 좋아합니다</p>
            <p>그 중에서 가장 좋아하는 것은 {props.userInfo.likeList[2]}입니다</p>
        </>
    )
}
*/
/*
//2.2 객체형태의 값을 풀어서 넘겨준 값 받기
const Body = ({name, addr, likeList}) => {
    return (
        <>
            <h3>본문입니다</h3>
            <p>{name}님은 {addr}에 살고 있습니다</p>
            <p>내가 좋아하는 것들은 {likeList}의 {likeList.length}개를 좋아합니다</p>
            <p>그 중에서 가장 좋아하는 것은 {likeList[2]}입니다</p>
        </>
    )
}
*/

const Body = () => {
    function btnClick(e) {
        alert("버튼 눌렀어요");
        console.log(e);
    }
    return (
        <>
            <h3>본문입니다</h3>
            <button onClick={btnClick}>A이벤트 버튼</button><br/><br/>
            <button onClick={btnClick}>B이벤트 버튼</button><br/><br/>
            <Button />
           
        </>
    )
}

export default Body;