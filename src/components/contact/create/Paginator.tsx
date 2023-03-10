import React from 'react';

function Paginator({ activeStep, moveNext, movePrev, onSubmit }: any) {
    return (
        <div className='mt-4 flex justify-between items-center gap-10'>
            {activeStep > 1 ? <button className='border border-black/30 px-4 py-1.5 rounded-lg' onClick={() => { movePrev() }}>Prev</button> : <div></div>}
            {activeStep < 6 ? <button className='border border-black/30 px-4 py-1.5 rounded-lg' onClick={() => { moveNext() }}>Next</button> : <div></div>}
            {activeStep === 6 && <button className='border border-black/30 px-4 py-1.5 rounded-lg' onClick={() => onSubmit()}>Submit</button>}
        </div>
    );
}

export default Paginator;