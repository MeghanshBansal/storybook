import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme: string,
    children: string,
};

const Button: React.FC<Props>=({theme, children, ...rest})=>{
    return (
        <button type="submit" className = {theme}>{children}</button>
    )
};

export default Button;