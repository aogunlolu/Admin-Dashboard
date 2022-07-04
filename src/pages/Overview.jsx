import React from 'react'
import {BsDashLg, BsFillPlusSquareFill} from "react-icons/bs"
import styled from 'styled-components'




const Overview = () => {
  return (
      <Overviews>          
    <div className='overview px-6 py-4 md:px-12 bg-slate-200 dark:bg-slate-800 dark:text-white'>
    <div className='grid grid-cols-2 gap-3 font-Mulish md:flex md:gap-10'>
        <div className='border rounded-lg shadow-lg text-center p-10 bg-white dark:bg-slate-800  md:w-1/4'>
            <p className='text-gray-400 '>Unresolved</p>
            <h1 className='text-lg font-bold pt-1 md:text-4xl'>60</h1>
        </div>
        <div className='border rounded-lg shadow-lg border-blue-500 bg-white dark:bg-slate-800 text-center p-10 md:w-1/4'>
            <p className=' text-blue-500'>Overdue</p>
            <h1 className='text-lg font-bold pt-1 text-blue-500 md:text-4xl'>16</h1>
        </div>
        <div className='border rounded-lg shadow-lg bg-white dark:bg-slate-800  text-center p-10 md:w-1/4'>
            <p className='text-gray-400 '>Open</p>
            <h1 className='text-lg font-bold pt-1 md:text-4xl'>43</h1>
        </div>
        <div className='border rounded-lg shadow-lg bg-white dark:bg-slate-800  text-center p-10 md:w-1/4' >
            <p className='text-gray-400 '>On hold</p>
            <h1 className='text-lg font-bold pt-1 md:text-4xl'>64</h1>
        </div>
    </div>
    <div className='grid mt-10 border rounded-lg shadow-lg bg-white dark:bg-slate-800  md:flex'>
        <div className='left w-full md:w-2/3 p-8'>
            <h3>Today's trends</h3>
            <div className='flex justify-between py-3'>
                <p className='text-gray-400 '>as of 25th May 2019, 09.41am</p>
                <div className='flex gap-6 '>
                    <div className='flex gap-1 justify-center ' >
                        <BsDashLg className='text-blue-500 m-1'/>
                        <p className='text-gray-400 '>Today</p>
                    </div>
                    <div className='flex  gap-1'>
                        <BsDashLg className='text-gray-400 m-1'/>
                        <p className='text-gray-400 '>Yesterday</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='rigth w-full md:w-1/3 '>
            <div className='border text-center p-6 '>
                <p className='text-gray-400 '>Resolved</p>
                <h1 className='text-sm font-bold pt-1 md:text-lg '>449</h1>
            </div>
            <div className='border text-center p-6'>
                <p className='text-gray-400 '>Recived</p>
                <h1 className='text-sm font-bold pt-1 md:text-lg'>426</h1>
            </div>
            <div className='border text-center p-6'>
                <p className='text-gray-400 '>Average first responce time</p>
                <h1 className='text-sm font-bold pt-1 md:text-lg'>33m</h1>
            </div>
            <div className='border text-center p-6 ' >
                <p className='text-gray-400 '>Average response time</p>
                <h1 className='text-sm font-bold pt-1 md:text-lg'>3h 8m</h1>
            </div>
            <div className='border text-center p-6' >
                <p className='text-gray-400 '>Resolution with SLA</p>
                <h1 className='text-sm font-bold pt-1 md:text-lg'>94%</h1>
            </div>
        </div>
    </div>
    <div className='grid gap-5 pt-6 md:flex '>
        <div className='left border rounded-lg shadow-lg p-8 bg-white dark:bg-slate-800  w-full md:w-1/2' >   
            <div className='flex justify-between pb-2'>
                <h3 className='text-lg font-semibold'>Unresolved tickets</h3>
                <p className='text-blue-500'>View details</p>
            </div>
            <div className='flex gap-1'>
                <p className='text-sm text-gray-400'>Group:</p>
                <p className='text-sm'>Support</p>
            </div>
            <div className='leading-10 pt-6'>
                <div className='flex justify-between'>
                    <h3>Waiting on Featured Request</h3>
                    <p className=' text-gray-400'>4238</p>
                </div>
                <div className='flex justify-between'>
                    <h3>Awaiting Customers Response</h3>
                    <p  className=' text-gray-400'>1005</p>
                </div>
                <div className='flex justify-between' >
                    <h3>Awaiting Developer Fix</h3>
                    <p  className=' text-gray-400'>914</p>
                </div>
                <div className='flex justify-between'>
                    <h3>Pending</h3>
                    <p  className=' text-gray-400'>281</p>
                </div>
            </div>
        </div>
        <div className='right border rounded-lg shadow-lg p-8 bg-white dark:bg-slate-800 w-full md:w-1/2'>
        <div className='flex justify-between pb-2'>
                <h3 className='text-lg font-semibold'>Task</h3>
                <p className='text-blue-500'>View all</p>
            </div>
            <div>
                <p className='text-sm text-gray-400'>Today</p>
            </div>
            <div className='leading-10 pt-6'>
                <div className='flex justify-between text-gray-400'>
                    <h3>Create new task</h3>
                    <BsFillPlusSquareFill className='mt-2 text-xl'/>
                </div>
                <div className='flex justify-between '>
                    <div className='flex gap-4 text-center'>
                        <input className='pt-4' type="radio" id="radio" />
                        <h3>Finished tickets update</h3>
                    </div>                   
                    <button className='bg-yellow-400 text-white rounded-lg text-xs'>URGENT</button>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-4'>
                        <input type="radio" id="radio" />
                        <h3>Create new ticket example</h3>
                    </div>    
                    <button className='bg-green-500 text-white rounded-lg text-xs'>NEW</button>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-4'>
                        <input type="radio" id="radio" />
                        <h3>Update ticket report</h3>
                    </div>
                    <button className='bg-slate-300 text-slate-400 rounded-lg text-xs'>DEFAULT</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    </Overviews>
  )
}
const Overviews = styled.div`
   input{
       /* margin-top: 5px; */
       
   }
   button{
    padding: 5px 15px;
    margin: 8px 0;
    
   }
`
export default Overview