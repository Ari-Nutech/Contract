import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import useAuth from "../../hooks/useAuth";

function SignUp() {
    const navigate = useNavigate()

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    const { signin } = useAuth()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");


    const onSubmit = async (e: any) => {
        e.preventDefault()
        const req = { email, password };
        // await signin(req);
        navigate('/')
    }

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-white'>
            <div className='flex justify-center items-center w-screen h-screen'>
                <div className='max-w-[400px] w-11/12 m-auto'>
                    <form onSubmit={onSubmit}>
                        <Link to="/">
                            <img src='/img/HorizontalLogoNegative.png' alt='' className='h-16 m-auto' />
                        </Link>
                        <p className='text-3xl font-medium text-center text-[#09101D] mt-10'>Sign Up</p>
                        <div className='mt-6'>
                            <p className='pl-4'>Email</p>
                            <input
                                type={'email'}
                                className="rounded-full w-full py-3 px-4 border border-[#5265FF] outline-none mt-1"
                                placeholder='Enter Email'
                                required
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='mt-3'>
                            <p className='pl-4'>Password</p>
                            <input
                                type={'password'}
                                className="rounded-full w-full py-3 px-4 border border-[#5265FF] outline-none mt-1"
                                placeholder='Enter Password'
                                required
                                value={password}
                                onChange={(e: any) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='mt-3'>
                            <p className='pl-4'>Re-enter Password</p>
                            <input
                                type={'password'}
                                className="rounded-full w-full py-3 px-4 border border-[#5265FF] outline-none mt-1"
                                placeholder='Re-enter Password'
                                required
                                value={password1}
                                onChange={(e: any) => setPassword1(e.target.value)}
                            />
                        </div>
                        <div className='pl-4 mt-3 flex justify-start gap-2 items-center'>
                            <input type={'checkbox'} className="" />
                            <p>Remember me</p>
                        </div>
                        <div className='mt-5'>
                            <input type={'submit'} className="text-white py-4 font-medium px-4 rounded-full bg-[#2633ED] w-full cursor-pointer" value={'Sign In'} />
                        </div>
                        <div className='mt-5 flex justify-center gap-4 items-center'>
                            <p className='text-[#858C94]'>Already have an account?</p>
                            <Link to={'/auth/signin'} ><p className='text-[#5265FF] font-medium'>Sign In</p></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;