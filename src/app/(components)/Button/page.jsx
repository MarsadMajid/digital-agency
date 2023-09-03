import React from 'react'

export default function Button(prop) {
  return (
    <div>
        <button className='text-sm object-fill font-semibold p-3 px-6 rounded-full text-white  bg-blue-500 hover:bg-blue-300 active:bg-blue-700 '>{prop.txt}</button>
    </div>
  )
}
