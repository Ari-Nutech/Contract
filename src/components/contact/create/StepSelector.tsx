import React from 'react'
import { Sticky } from 'react-sticky';

interface Props {
    activeStep: number,
    setActiveStep: Function
}

export default function StepSelector({ activeStep, setActiveStep }: Props) {
    const steps = [
        { no: 1, title: 'CONTRACT', description: '' },
        { no: 2, title: 'BROKER INFORMATION', description: '' },
        { no: 3, title: 'OPTION FEE RECEIPT', description: '' },
        { no: 4, title: 'EARNEST MONEY RECEIPT', description: '' },
        { no: 5, title: 'CONTRACT RECEIPT', description: '' },
        { no: 6, title: 'ADDITIONAL EARNEST MONEY RECEIPT', description: '' }
    ]

    return (
        <>
            <Sticky topOffset={80}>
                {({ style }: any) =>
                    <div className='bg-white pt-10' style={style} id="header">
                        <div className='pt-10 shadow-md p-4 sm:p-6 rounded-lg '>
                            {steps.map((step, key) => {
                                return (
                                    <div key={key}>
                                        {key !== 0 && (
                                            <div className="flex justify-start sm:justify-end ml-2 mr-[8px]">
                                                <div className={`w-[3px] h-14 -my-3 z-0 ${key + 1 <= activeStep
                                                    ? "bg-[#2633ED]"
                                                    : "bg-[#D3D9DF]"
                                                    }`}
                                                ></div>
                                            </div>
                                        )}
                                        <div className="flex justify-end items-center gap-4">
                                            <div className="text-start sm:text-end">
                                                <p className={`${key + 1 <= activeStep ? "cursor-pointer text-[#2633ED] font-bold" : "text-black/40"} font-medium`}>
                                                    {step.title}
                                                </p>
                                            </div>
                                            <div
                                                className={`w-[19px] h-[19px] rounded-full z-10 ${key + 1 <= activeStep
                                                    ? "bg-[#2633ED] border-2 border-[#2633ED]/30"
                                                    : "border-[#D3D9DF] border-2 bg-white"
                                                    }`}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                            <div className='mt-6 flex justify-between items-center gap-10'>
                                {activeStep > 1 ? <button className='border border-black/30 px-4 py-1.5 rounded-lg' onClick={() => { setActiveStep(activeStep - 1) }}>Prev</button> : <div></div>}
                                {activeStep < steps.length ? <button className='border border-black/30 px-4 py-1.5 rounded-lg' onClick={() => { setActiveStep(activeStep + 1) }}>Next</button> : <div></div>}
                                {activeStep === steps.length && <button className='border border-black/30 px-4 py-1.5 rounded-lg'>Submit</button>}
                            </div>
                        </div>
                    </div>
                }
            </Sticky>
        </>
    )
}
