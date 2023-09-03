import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Inputmail() {
  return (
    <div>
        <li  className=' text-sm flex items-center hover:text-gray-500 '> <input type="email" className='p-2 outline-none border-2 pl-6  text-blue-900 font-semibold  focus:border-blue-500'  placeholder='Enter your Email' /><AiOutlineArrowRight size={40} className='bg-blue-700 text-white p-2   cursor-pointer ' /></li>
    </div>
  )
}
