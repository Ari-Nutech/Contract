import React from 'react';
import { useEffectOnce } from '../../../../hooks/useEffectOnce';
import Input from '../Input';

function BrokerInformation() {
    useEffectOnce(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });

    return (
        <div className='border border-black/80 p-10'>
            <div>
                <p className='text-center'><b>BROKER INFORMATION</b></p>
                <p className='text-center'>(Print name(s) only. Do not sign)</p>

                <div className='mt-10 flex justify-between gap-6'>
                    <div className='w-full'>
                        <div className='flex justify-between'>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-left'} />
                                <p>Other Broker Firm</p>
                            </div>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-right'} />
                                <p className='text-right'>License No.</p>
                            </div>
                        </div>
                        <div className='flex justify-start gap-4 mt-2'>
                            <p>represents</p>
                            <div>
                                <p><Input type={'checkbox'} /> Buyer only as Buyer's agent</p>
                                <p><Input type={'checkbox'} /> Seller as Listing Broker's subagent</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-left'} />
                                <p>Associate's Name</p>
                            </div>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-right'} />
                                <p className='text-right'>License No.</p>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <Input width={'full'} className={'text-left'} />
                            <p>Team Name</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-left'} />
                                <p>Associate's Email Address</p>
                            </div>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-right'} />
                                <p className='text-right'>Phone</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-left'} />
                                <p className='whitespace-nowrap'>Licensed Supervisor of Associate</p>
                            </div>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-right'} />
                                <p className='text-right'>License No.</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-left'} />
                                <p className='whitespace-nowrap'>Other Broker's Address</p>
                            </div>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-right'} />
                                <p className='text-right'>Phone</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-2'>
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
                    </div>
                    <div className='w-full'>
                        <div className='flex justify-between'>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-left'} />
                                <p>Listing Broker Firm</p>
                            </div>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-right'} />
                                <p className='text-right'>License No.</p>
                            </div>
                        </div>
                        <div className='flex justify-start gap-4 mt-2'>
                            <p>represents</p>
                            <div>
                                <p><Input type={'checkbox'} /> Seller and Buyer as an intermediary</p>
                                <p><Input type={'checkbox'} /> Seller only as Seller's agent</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-left'} />
                                <p>Listing Associate's Name</p>
                            </div>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-right'} />
                                <p className='text-right'>License No.</p>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <Input width={'full'} className={'text-left'} />
                            <p>Team Name</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-left'} />
                                <p className='whitespace-nowrap'>Listing Associate's Email Address</p>
                            </div>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-right'} />
                                <p className='text-right'>Phone</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-left'} />
                                <p className='whitespace-nowrap'>Licensed Supervisor of Listing Associate</p>
                            </div>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-right'} />
                                <p className='text-right'>License No.</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-left'} />
                                <p className='whitespace-nowrap'>Listing Broker's Office Address</p>
                            </div>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-right'} />
                                <p className='text-right'>Phone</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-2'>
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
                        <div className='flex justify-between mt-2'>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-left'} />
                                <p className='whitespace-nowrap'>Selling Associate's Name</p>
                            </div>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-right'} />
                                <p className='text-right'>License No.</p>
                            </div>
                        </div>
                        <div className=' mt-2'>
                            <Input width={'full'} className={'text-left'} />
                            <p className='whitespace-nowrap'>Team Name</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-left'} />
                                <p className='whitespace-nowrap'>Selling Associate's Email Address</p>
                            </div>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-right'} />
                                <p className='text-right'>Phone</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-left'} />
                                <p className='whitespace-nowrap'>Licensed Supervisor of Selling Associate</p>
                            </div>
                            <div className='w-full'>
                                <Input width={'full'} className={'text-right'} />
                                <p className='text-right'>License No.</p>
                            </div>
                        </div>
                        <div className=' mt-2'>
                            <Input width={'full'} className={'text-left'} />
                            <p className='whitespace-nowrap'>Selling Associate's Office Address</p>
                        </div>
                        <div className='flex justify-between mt-2'>
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
                    </div>

                </div>
                <div className='mt-10'>
                    <p>
                        Disclosure: Pursuant to a previous, separate agreement (such as a MLS offer of compensation or other agreement between brokers), Listing Broker has agreed to pay Other Broker a fee
                        (<Input width={'[300px]'} />)
                        This disclosure is for informational purposes and does not change the previous agreement between brokers to pay or share a commission.
                    </p>

                </div>
            </div>
        </div>

    );
}

export default BrokerInformation;