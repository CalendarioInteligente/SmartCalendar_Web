import './Button.css'

const Button = ({ children, onClick, style, className }) => {
    return <button className={className} style={style} onClick={onClick}>{children}</button>
}

export default Button;
