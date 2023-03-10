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

    const [transactionInfo, setTransactionInfo] = useState({});

    const onInitiateTransaction = async () => {
        const req = {
            "buyer": {
                "addressLine1": "123 S Main Seguin",
                "addressLine2": "",
                "city": "Seguin",
                "country": "US",
                "emailId": "doe1@yahoo.com",
                "firstName": "John",
                "lastName": "Doe",
                "password": "",
                "phoneNumber": "2104228637",
                "state": "TX",
                "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "zipCode": "78155"
            },
            "buyerAgent": {
                "addressLine1": "3201 Cherry Ridge Dr Ste. 213",
                "addressLine2": "",
                "city": "San Antonio",
                "country": "US",
                "emailId": "",
                "firstName": "",
                "lastName": "",
                "password": "",
                "phoneNumber": "",
                "state": "TX",
                "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "zipCode": "78248"
            },
            "coordinator": {
                "addressLine1": "",
                "addressLine2": "",
                "city": "",
                "country": "",
                "emailId": "",
                "firstName": "",
                "lastName": "",
                "password": "",
                "phoneNumber": "",
                "state": "",
                "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "zipCode": ""
            },
            "dueDiligence": "2023-03-23T01:55:07.691Z",
            "loanOfficer": {
                "addressLine1": "",
                "addressLine2": "",
                "city": "",
                "country": "",
                "emailId": "",
                "firstName": "",
                "lastName": "",
                "password": "",
                "phoneNumber": "",
                "state": "",
                "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "zipCode": ""
            },
            "projectClosingDay": "2023-03-23T01:55:07.691Z",
            "property": {
                "addressLine1": "2634 BlackBear Dr. New Braunfels TX",
                "addressLine2": "",
                "addressType": "",
                "city": "New Braunefels",
                "country": "US",
                "propertyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "salePrice": "10.53",
                "state": "TX",
                "transactionId": "",
                "zipCode": "78132"
            },
            "seller": {
                "addressLine1": "687 Austin St",
                "addressLine2": "",
                "city": "New Braunfels",
                "country": "US",
                "emailId": "bttholmes@yahoo.com",
                "firstName": "Mike",
                "lastName": "Black",
                "password": "",
                "phoneNumber": "2195598514",
                "state": "TX",
                "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "zipCode": "78132"
            },
            "sellerAgent": {
                "addressLine1": "107 S River St.",
                "addressLine2": "",
                "city": "Seguin",
                "country": "US",
                "emailId": "",
                "firstName": "",
                "lastName": "",
                "password": "",
                "phoneNumber": "",
                "state": "TX",
                "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "zipCode": "78155"
            },
            "titleAgent": {
                "addressLine1": "",
                "addressLine2": "",
                "city": "",
                "country": "",
                "emailId": "",
                "firstName": "",
                "lastName": "",
                "password": "",
                "phoneNumber": "",
                "state": "",
                "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "zipCode": ""
            }
        }
        setLoading(true);
        const res = await initiateTransaction(req);
        console.log("______res", res)
        setLoading(false);
    }

    return (
        <div className='flex justify-center gap-10 py-10'>
            <div className='hidden lg:block w-[380px]'>
                <StepSelector activeStep={activeStep} setActiveStep={setActiveStep} onInitiateTransaction={onInitiateTransaction} />
            </div>
            <div className='w-11/12 xl:w-[1009px]'>
                {activeStep === 1 && <>
                    <Contract
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                        transactionInfo={transactionInfo}
                        setTransactionInfo={setTransactionInfo}
                    />
                </>}
                {activeStep === 2 && <BrokerInformation />}
                {activeStep === 3 && <OptionFeeReceipt />}
                {activeStep === 4 && <EarnestMoneyReceipt />}
                {activeStep === 5 && <ContractReceipt />}
                {activeStep === 6 && <MoneyReceipt />}
            </div>
        </div>
    )
}
