import React, { useState } from 'react'
import {AiFillAlert ,AiFillEyeInvisible} from "react-icons/ai"
import styled from 'styled-components'
import Home from "../pages/Home"
import { useDispatch, useSelector } from 'react-redux';
import  {login, selectUser } from "../features/UserSlice"


const Login = () => {
  const dispatch  = useDispatch();
  const user = useSelector(selectUser);

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(
      login({
        email: email,
        pwd: pwd ,
        isLogin : true   
      })
      );
  };

  return (
    <>
    {user.isLogin ? (<Home/>): 
    (<Loginpage className='min-h-screen pt-12 md:pt-32 pb-6 px-2 bg-zinc-800' >
      <div className='max-w-lg mx-auto bg-white rounded-md py-10 px-8 leading-loose'>
        <div className="container text-center ">
          <AiFillAlert className='w-12 h-12 mx-auto text-blue-500'/>
          <h3 className="text-base text-gray-400 py-2 tracking-wider">Dashboard Kit</h3>
          <h2 className="text-2xl font-bold py-2 tracking-wider">Log In to Dashboard Kit</h2>
          <p className='text-gray-400'>Enter your email and password below</p>
        </div>
        <form onSubmit={handleSubmit} 
        className='flex flex-col text-gray-400 text-xs leading-6 pt-7'>
          <label className='font-bold pb-3'>EMAIL</label>
          <input 
            type="email" 
            id="email" 
            placeholder='email address:' 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className='px-4 py-3 text-sm rounded-lg border-inherit border-solid border-2 outline-0'/>
          <div>  
          <div className='flex justify-between pt-7 pb-3'>
            <label className='font-bold '>PASSWORD</label>
            <p>forget password</p>
          </div>
          <div className='flex justify-between relative'>
          <input 
            type="password" 
            id="password" 
            placeholder='password'
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required 
            className='px-4 py-3 text-sm rounded-lg border-inherit border-solid border-2 outline-0 w-screen '/>
          <AiFillEyeInvisible className='absolute inset-y-4 right-4 w-5 h-5'/>
          </div>
          </div>
          <button 
            type="submit"
            className='bg-blue-600 hover:bg-blue-700 transition duration-200 text-white w-full rounded-lg my-7 p-3'>Log in</button>
        </form>        
       
        <p className='text-center text-gray-400'>Don't have an account? <a href="#" className="text-blue-600 hover:text-blue-700  hover:underline">Sign up</a></p>
      </div>
      </Loginpage>
    )}
    </>
  )
}
const Loginpage = styled.div`
  
`
export default Login