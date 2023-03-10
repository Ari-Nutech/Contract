import React from 'react';

const Input = ({ type = "text", width = 20, className, value, setValue, placeholder }: any) => {

    return (
        <>
            <input
                type={type}
                style={width === "full" ? { width: "100%" } : value ? { width: value.length * 6 + 60, minWidth: width * 3 } : { width: width * 3 }}
                className={`${className} border-b border-black/50 outline-none shadow-sm text-sm`}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
            />
        </>
    )
}

export default Input;