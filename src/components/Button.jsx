import './Button.css'

const Button = ({ children, onClick, style }) => {
    return <button style={style} onClick={onClick}>{children}</button>
}

export default Button;
