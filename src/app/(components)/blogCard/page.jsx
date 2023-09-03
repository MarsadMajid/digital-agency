import React from 'react'
import Link from 'next/link'
import 'src/app/(components)/blogCard/style.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
export default function BlogCard(props) {
  return (
    <div  className={`border-2 hover:text-white  hover-effect bg-slate-50  hover:border-blue-700 text-black hover:bg-blue-700 ease-in duration-300 py-4 pb-10 ${props.hid} ` } >
    <div className={`max-w-md px-5 ` }> 
             <Link href="/about" >
           <h3 className=' font-semibold text-xl my-3' >{props.txt}</h3>
           <h4 className={`${props.css}`} >{props.txt2}</h4>
           <p className='my-3 ' >{props.explain}</p>
           <span className='flex items-center'>Read More
            <AiOutlineArrowRight size={20}  className="text-blue-700 hover-target cursor-pointer hover:text-white" /></span>
           </Link>
           {/* <span className='  absolute bottom-0  translate-x-40 sm:translate-x-44  translate-y-[87vh] sm:translate-y-8 z-10 '>
           <AiOutlineArrowRight size={35} className='bg-blue-700 text-white p-2 rounded-full cursor-pointer ' />
           </span> */}
           
     </div>
</div>
  )
}
