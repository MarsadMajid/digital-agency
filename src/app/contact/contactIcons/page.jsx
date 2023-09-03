import React from 'react'
import Link from 'next/link'
// import { IconName } from "react-icons/im";
export default function ContactIcons(props) {
  return (
    <div>
      <div className='flex '>
          <div className='text-blue-600'>{props.icon}</div>
       <div className='flex-col ms-4'>
        <p className='hidden'></p>
       <h2 className='text-xl text-blue-500 font-semibold' >Heading{props.text}</h2>
       <p className='hover:text-blue-800 active:text-blue-950 cursor-pointer'>{props.para}Lorem</p>
       </div>
       </div>
    </div>
   

  )
}
