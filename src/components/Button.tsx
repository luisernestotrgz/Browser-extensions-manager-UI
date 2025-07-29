import './button.css'
import React from "react";

type ButtonProps = {
    text: string;
    onClick: () => void;
    isActive: boolean;
}

const Button: React.FC<ButtonProps> = ({onClick, text, isActive}) => {
    return <button className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>{text}</button>
}

export default Button