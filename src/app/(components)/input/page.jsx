import React from 'react'

export default function Inputs(props) {
  return (
    <div>
        <p className='font-semibold text-xl'>{props.txt}</p>
        <input type={props.type} className='p-2 outline-none border-2 pl-6  text-blue-900 font-semibold  focus:border-blue-500'  placeholder={props.place} />
    </div>
  )
}
