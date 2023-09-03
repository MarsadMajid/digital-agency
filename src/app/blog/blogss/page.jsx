import React from 'react'
import 'src/app/blog/blogss/style.css'
import Image from 'next/image'

export default function Blogss(props) {
  return (
    <div className=''>
        <div className="center flex items-center justify-center  scale-90 sm:scale-[1]">
  <div className="article-card w-[380px] h-[238px] rounded-2xl overflow-hidden relative transition-all duration-300 shadow-lg shadow-slate-600 ">
    <div className="content box-border w-full absolute bottom-0 px-[30px]  py-[20px] h-auto  ">
      <p className="date  m-0 font-semibold text-white opacity-90">{props.date}</p>
      <p className="title m-0 font-semibold text-white opacity-90 ">{props.article}</p>
    </div>
    <div  ><Image width={500} height={500} className='w-full h-full object-cover' src={props.source} alt="article-cover" /></div>
    
  </div>
</div>
    </div>
  )
}
