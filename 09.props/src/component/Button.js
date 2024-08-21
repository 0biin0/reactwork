import './Button.css';

const Button = ({text, color, a, b, c}) => {
    return (
        <button className="btn" style={{color:color, backgroundColor:a}}>{b}버튼</button>
    )
}

export default Button;