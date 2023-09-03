import React from 'react'
import Blogss from './blogss/page'

export default function page() {
  return (
    <div>
        <div className=" max-w-7xl mx-auto mt-24  ">
                    <h1 className='font-semibold text-4xl text-center text-blue-600' >Latest Blogs of Ai History</h1>
  <div className="flex items-start  justify-center flex-wrap py-[50px]  space-x-0 md:space-x-4  space-y-8 ">

    <p className='hidden '>.</p>
    <Blogss date={'September 1,2033'} article={'Learn WEB and Advance Ai'} source={'/web.jpg'}/>
    <Blogss date={'September 15,2033'} article={'New Gen Tank'} source={'/image (7).jpg'}/>
    <Blogss date={'September 29,2033'} article={'Ai takeover Fighter Jet'} source={'/image (8).jpg'}/>
    <Blogss date={'December 3,2033'} article={'Ai Wagging war on Humanity'} source={'/WAR.jpg'}/>
    <Blogss date={'September 14,2037'} article={'Ai Soilders attacking Pakistan'} source={'/image (9).jpg'}/>
    <Blogss date={'June 4,2040'} article={'Virus Created By World Scientis'} source={'/image (10).jpg'}/>
    <Blogss date={'March 22,2041'} article={'Peace Treaty'} source={'/image (11).jpg'}/>
    <Blogss date={'December 7,2045'} article={'Co-Existenece of Ai and Humans'} source={'/image (12).jpg'}/>
  </div>
  </div>
    </div>
  )
}
