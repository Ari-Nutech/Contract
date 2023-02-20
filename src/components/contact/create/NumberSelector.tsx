import React, { useEffect, useState } from 'react'
import { Sticky } from 'react-sticky';


export default function NumberSelector() {

    const [selectedNumber, setSelectedNumber] = useState(1);

    const handleClickScroll = (num: number) => {
        setSelectedNumber(num)
        const element: any = document.getElementById(`big${num}`);
        var bodyRect = document.body.getBoundingClientRect(),
            elemRect = element.getBoundingClientRect(),
            offset = elemRect.top - bodyRect.top;

        window.scrollTo({
            top: offset - 70,
            behavior: 'smooth',
        });
    };

    return (
        <Sticky topOffset={10}>
            {({ style }) =>
                <div className='flex justify-start flex-wrap gap-1 bg-white py-3' style={style} id="header">
                    {
                        Array.from(Array(23), (e, i) => {
                            return <button
                                key={i}
                                className={`h-10 w-10 border border-black/30 rounded ${selectedNumber === i + 1 && "bg-[#2633ED] text-white"} shadow-sm`}
                                onClick={() => handleClickScroll(i + 1)}
                            >{i + 1}</button>
                        })
                    }
                </div>}
        </Sticky>

    )
}
