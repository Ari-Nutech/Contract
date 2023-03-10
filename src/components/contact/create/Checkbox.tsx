import React from 'react';

const Checkbox = ({ className, value, setValue }: any) => {

    return (
        <input
            type={'checkbox'}
            className={`${className} border-b border-black/50 outline-none shadow-sm cursor-pointer h-4 w-4`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

export default Checkbox;