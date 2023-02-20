import React from 'react';
import { useEffectOnce } from '../../../../hooks/useEffectOnce';
import Input from '../Input';

function OptionFeeReceipt() {
    useEffectOnce(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });

    return (
        <div className='border border-black/80 p-10'>
            <div>
                <p className='text-center'><b>OPTION FEE RECEIPT</b></p>
                <p className='mt-4'>Receipt of $(<Input width={'[300px]'} />) (Option Fee) in the form of (<Input width={'[300px]'} />) is acknowledged.</p>

                <div className='flex justify-between gap-6 mt-4'>
                    <div className='w-full'>
                        <Input width={'full'} className={'text-left'} />
                        <p>Escrow Agent Old Republic Title/Naomi Flores</p>
                    </div>
                    <div className='w-full'>
                        <Input type={'date'} width={'full'} className={'text-right'} />
                        <p className='text-right'>Date</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OptionFeeReceipt;