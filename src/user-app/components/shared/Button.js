import React from 'react';

const Button = (props) => {
    return <button className={`book-btn ${props.className}`}>{props.children}</button>
}

export default Button;