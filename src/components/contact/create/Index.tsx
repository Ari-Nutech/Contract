import React, { useState } from 'react'
import NumberSelector from './NumberSelector';
import BrokerInformation from './steps/BrokerInformation';
import Contract from './steps/Contract';
import ContractReceipt from './steps/ContractReceipt';
import EarnestMoneyReceipt from './steps/EarnestMoneyReceipt';
import MoneyReceipt from './steps/MoneyReceipt';
import OptionFeeReceipt from './steps/OptionFeeReceipt';
import StepSelector from './StepSelector'

export default function Index() {

    const [activeStep, setActiveStep] = useState(1);

    return (
        <div className='flex justify-center gap-10 py-10'>
            <div className='w-[380px]'>
                <StepSelector activeStep={activeStep} setActiveStep={setActiveStep} />
            </div>
            <div className='w-[1009px]'>
                {activeStep === 1 && <><NumberSelector /><Contract /></>}
                {activeStep === 2 && <BrokerInformation />}
                {activeStep === 3 && <OptionFeeReceipt />}
                {activeStep === 4 && <EarnestMoneyReceipt />}
                {activeStep === 5 && <ContractReceipt />}
                {activeStep === 6 && <MoneyReceipt />}
            </div>
        </div>
    )
}
