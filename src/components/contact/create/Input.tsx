import React from 'react';

const Input = ({ type = "text", width, className }: any) => {
    return (
        <input type={type} className={`${className} border-b border-black/50 outline-none shadow-sm w-${width}`} />
    )
}

export default Input;