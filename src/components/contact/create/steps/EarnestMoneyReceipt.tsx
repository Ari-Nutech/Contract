import React from 'react';
import { useEffectOnce } from '../../../../hooks/useEffectOnce';
import Input from '../Input';

function EarnestMoneyReceipt() {
    useEffectOnce(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });

    return (
        <div className='border border-black/80 p-10'>
            <div>
                <p className='text-center'><b>EARNEST MONEY RECEIPT</b></p>
                <p className='mt-4'>Receipt of $(<Input width={'[300px]'} />) Earnest Money in the form of (<Input width={'[300px]'} />) is acknowledged.</p>

                <div className='flex justify-between gap-6 mt-2'>
                    <div className='w-full'>
                        <div className='flex justify-between mt-2'>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-left'} />
                                <p>Escrow Agent</p>
                            </div>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-right'} />
                                <p className='text-right'>Received by</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='flex justify-between mt-2'>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-left'} />
                                <p>Email Address</p>
                            </div>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-right'} />
                                <p className='text-right'>Date/Time</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between gap-6 mt-2'>
                    <div className='w-full'>
                        <Input width={'full'} className={'text-left'} />
                        <p>Address</p>
                    </div>
                    <div className='w-full'>
                        <Input width={'full'} className={'text-right'} />
                        <p className='text-right'>Phone</p>
                    </div>
                </div>
                <div className='flex justify-between gap-6 mt-2'>
                    <div className='flex justify-between w-full'>
                        <div className='w-full'>
                            <Input width={'full'} className={'text-left'} />
                            <p className='whitespace-nowrap'>City</p>
                        </div>
                        <div className='w-30'>
                            <Input width={'full'} className={'text-right'} />
                            <p className='text-right'>State</p>
                        </div>
                        <div className='w-30'>
                            <Input width={'full'} className={'text-right'} />
                            <p className='text-right'>Zip</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <Input width={'full'} className={'text-right'} />
                        <p className='text-right'>Fax</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EarnestMoneyReceipt;