'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Button from '../Button/page'

export default function PriceCard(props) {
  // const [value,setvalue] = useState(props.value)
  // const togglevalue =()=>{
  //   setvalue(value === props.value ? `${props.year}` : props.value); // Toggle between 'none' and 'dark'
  //   console.log(props.value)
  // }
  return (
    <div>
      {/* <div >
      <h1 className="text-blue-600 text-2xl my-2"  >Our Pricing</h1>
         <span className='flex justify-between'><p className="text-4xl font-semibold my-2" >Choose A Plan That's Right For You</p> 
              <button onClick={togglevalue} >assasa</button>
         </span>
      </div> */}
      <div className=' max-w-[350px] hover:bg-blue-300 flex flex-col items-center hover:text-white ease-in duration-300 shadow ' >
      <h3 className='my-1 pt-3 text-2xl font-semibold'>{props.plan}</h3> 
      <Image width={70} height={10} className=' mx-auto rounded-full object-cover my-2' src='/webs.jpg' alt=""/>
        <div className='flex flex-col justify-center space-y-4 ' >
         <span className='flex items-end '> <h3 className='text-3xl   font-bold text-blue-600'>{props.value}</h3><p className='font-semibold'>{props.month}</p></span>
         <p className='text-center' >Graphic Design <br/>
            Web Design <br/>
            UI/UX <br/>
            HTML/CSS <br/>
            SEO Marketing <br/>
            Business Analysis
          </p>
          <span className='text-center pb-5' >
          <Button txt={'Start Now'}/>
          </span>
        </div>
      </div>
    </div>
  )
}
