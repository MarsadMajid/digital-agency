
import React from 'react'
import Inputs from '../(components)/input/page'
import Button from '../(components)/Button/page'
import ContactIcons from './contactIcons/page'
import Navbar from '../(components)/navbar/page'
import { ImLocation ,ImPhone,ImGithub,ImReddit} from "react-icons/im";

export default function Contact() {
  return (
    <div>
      <Navbar/>
         <div className='max-w-full py-0 px-7 sm:py-0 mt-28  my-8 '>
         <h1 className='font-semibold text-4xl text-center text-blue-600 my-10' >Contact Us</h1>
            <div >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4045.9654081074837!2d73.10452915898648!3d31.49014661454257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226a1dd6241def%3A0x3ab1ddcf9daa72cc!2sAllama%20Iqbal%20Open%20University%20Faisalabad%20campus!5e0!3m2!1sen!2s!4v1693493976448!5m2!1sen!2s" className='mx-auto w-[325px]  md:w-[1600px] '  height={450} style={{border:`0`}} allowfullscreen="" loading={`lazy`} referrerpolicy={"no-referrer-when-downgrade"}></iframe>
        </div>
        <div className='grid  grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto mt-10' >
          <div className=' space-y-8 item-center mt-10'>
            <p className='hideen'></p>
        <ContactIcons icon={<ImLocation size={50}  text={'Address'} txt2={'lorem lorem lorem lorem lorem lorem lorem '}/>}/>
        <ContactIcons icon={<ImPhone size={50}  text={'Phone no'} txt2={'lorem lorem lorem lorem lorem lorem lorem '}/>}/>
        <ContactIcons icon={<ImGithub size={50}  text={'Address'} txt2={'lorem lorem lorem lorem lorem lorem lorem '}/>}/>
        <ContactIcons icon={<ImReddit size={50}  text={'Address'} txt2={'lorem lorem lorem lorem lorem lorem lorem '}/>}/>
        </div>
         <div className=' max-w-2xl px-4 py-3 my-4   border-2 '>
          <div className=' md:flex  space-x-0 sm:space-x-20 '>
          <div className='space-y-5' >
            <p className='hidden'></p>
        <Inputs Type={'text'} place={'Enter your Name'} txt={'Name'} />
        <Inputs Type={'Email'} place={'Enter your Email'}  txt={'Email'}/>
        </div>
        <div className='space-y-5' >
        <p className='hidden'></p>
        <Inputs Type={'number'} place={'Enter your Phone Number'} txt={'Number'} />
        <Inputs Type={'text'} place={'Enter your Adress'}  txt={'Adress'}/>
        </div>
        </div>
        <textarea rows="8" className='my-4  w-[280px] md:w-[600px] outline-none border-2 focus:border-blue-600 ' placeholder="Message" required></textarea>
        <div className='flex'>
        <input type="checkbox" className='my-2' />
        <p className='ms-2'>I agree to recieve marketing communication</p>
        </div>
         <div className='my-2'><Button txt={'Send'}/></div>
        </div>
        </div>
        </div>
    </div>
  )
}
