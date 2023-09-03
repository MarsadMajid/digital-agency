'use client'
import React from 'react'
import PriceCard from '../pricecard/page'
import { useState } from 'react'
import 'src/app/(components)/pricesCards/style.css'
import MaterialDesignSwitch from '../MaterialDesignSwitch/page'
export default function PricesCards(props) {
    const [value,setvalue] = useState(props.value)
    const [value1,setvalue1] = useState(props.value1)
    const [value2,setvalue2] = useState(props.value2)
    const [month,setmonth] = useState('Month')


    const togglevalue =()=>{
      setvalue(value === props.value ? props.year : props.value); // Toggle between 'none' and 'dark'
      setvalue1(value1 === props.value1 ? props.year1 : props.value1); // Toggle between 'none' and 'dark'
      setvalue2(value2 === props.value2 ? props.year2 : props.value2); // Toggle between 'none' and 'dark'
      setmonth(month === 'Month' ? 'Year' : 'Month')
    }
  return (
    <div>
        <div className='max-w-full py-0 px-7 sm:py-0 mt-14' >
      <h1 className="text-blue-600 text-2xl  max-w-7xl mx-auto my-2"  >Our Pricing</h1>
         <div className=' max-w-7xl mx-auto grid  sm:grid-cols-2 space-y-2 '>
            <p className="text-4xl font-semibold my-2" >Choose A Plan That's Right For You</p> 
              {/* <button onClick={togglevalue}  >/</button> */}
             <div onClick={togglevalue} className='duration-300  mx-auto sm:ps-[250px] ' ><MaterialDesignSwitch/></div>
         </div>
        <div className=' max-w-7xl grid grid-cols-1 md:grid-cols-3  mx-auto py-10 space-y-10 sm:space-y-0 ' >         
        <PriceCard  value={value}  year={props.year} month={month} plan={`Basic Plan`} />
        <PriceCard  value={value1}  year={props.year1} month={month} plan={`Standard Plan`} />
        <PriceCard  value={value2}  year={props.year2} month={month} plan={`Premium Plan`} />
        </div>
      </div>
    </div>
  )
}
