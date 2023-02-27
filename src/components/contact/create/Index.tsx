import React, { useState } from 'react'
import useLoading from '../../../hooks/useLoading';
import useTransaction from '../../../hooks/useTransaction';
import NumberSelector from './NumberSelector';
import BrokerInformation from './steps/BrokerInformation';
import Contract from './steps/Contract';
import ContractReceipt from './steps/ContractReceipt';
import EarnestMoneyReceipt from './steps/EarnestMoneyReceipt';
import MoneyReceipt from './steps/MoneyReceipt';
import OptionFeeReceipt from './steps/OptionFeeReceipt';
import StepSelector from './StepSelector'

export default function Index() {

    const { setLoading } = useLoading();
    const { initiateTransaction } = useTransaction()

    const [activeStep, setActiveStep] = useState(1);


    const onInitiateTransaction = async () => {
        const req = {
            "buyer": {
                "addressLine1": "string",
                "addressLine2": "string",
                "city": "string",
                "country": "string",
                "emailId": "string",
                "firstName": "string",
                "lastName": "string",
                "password": "string",
                "phoneNumber": "string",
                "state": "string",
                "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "zipCode": "string"
            },
            "buyerAgent": {
                "addressLine1": "string",
                "addressLine2": "string",
                "city": "string",
                "country": "string",
                "emailId": "string",
                "firstName": "string",
                "lastName": "string",
                "password": "string",
                "phoneNumber": "string",
                "state": "string",
                "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "zipCode": "string"
            },
            "coordinator": {
                "addressLine1": "string",
                "addressLine2": "string",
                "city": "string",
                "country": "string",
                "emailId": "string",
                "firstName": "string",
                "lastName": "string",
                "password": "string",
                "phoneNumber": "string",
                "state": "string",
                "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "zipCode": "string"
            },
            "dueDiligence": "2023-02-27T01:55:07.691Z",
            "loanOfficer": {
                "addressLine1": "string",
                "addressLine2": "string",
                "city": "string",
                "country": "string",
                "emailId": "string",
                "firstName": "string",
                "lastName": "string",
                "password": "string",
                "phoneNumber": "string",
                "state": "string",
                "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "zipCode": "string"
            },
            "projectClosingDay": "2023-02-27T01:55:07.691Z",
            "property": {
                "addressLine1": "string",
                "addressLine2": "string",
                "addressType": "string",
                "city": "string",
                "country": "string",
                "propertyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "salePrice": "10.53",
                "state": "string",
                "transactionId": "string",
                "zipCode": "string"
            },
            "seller": {
                "addressLine1": "string",
                "addressLine2": "string",
                "city": "string",
                "country": "string",
                "emailId": "string",
                "firstName": "string",
                "lastName": "string",
                "password": "string",
                "phoneNumber": "string",
                "state": "string",
                "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "zipCode": "string"
            },
            "sellerAgent": {
                "addressLine1": "string",
                "addressLine2": "string",
                "city": "string",
                "country": "string",
                "emailId": "string",
                "firstName": "string",
                "lastName": "string",
                "password": "string",
                "phoneNumber": "string",
                "state": "string",
                "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "zipCode": "string"
            },
            "titleAgent": {
                "addressLine1": "string",
                "addressLine2": "string",
                "city": "string",
                "country": "string",
                "emailId": "string",
                "firstName": "string",
                "lastName": "string",
                "password": "string",
                "phoneNumber": "string",
                "state": "string",
                "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "zipCode": "string"
            }
        }
        setLoading(true);
        const res = await initiateTransaction(req);
        console.log("______res", res)
        setLoading(false);
    }

    return (
        <div className='flex justify-center gap-10 py-10'>
            <div className='w-[380px]'>
                <StepSelector activeStep={activeStep} setActiveStep={setActiveStep} onInitiateTransaction={onInitiateTransaction} />
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
