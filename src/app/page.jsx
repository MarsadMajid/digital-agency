
import Image from 'next/image'
import Button from './(components)/Button/page'
import Navbar from './(components)/navbar/page'
import MainCard from './(components)/mainCard/page'
import Carousel from './(components)/carousle/page'
import MoveCard from './(components)/MoveCard/pages'
import SliderPage from './(components)/MoveCard/pages'
import Moves from './(components)/Moves/page'
import Multiplesmoves from './(components)/Multiplesmoves/page'
import Link from 'next/link'
import Workerinfo from './(components)/workersinfo/page'
import React from 'react'
import PriceCard from './(components)/pricecard/page'
import PricesCards from './(components)/pricesCards/page'
import Comments from './(components)/comments/page'
import Inputmail from './(components)/inputmail/inputmail'
import BlogCard from './(components)/blogCard/page'
import BlogMove from './(components)/blogCard/blogmove/page'
export default function Home() {
  return (
    <div>
      <div className='max-w-full py-0 bg-grad  px-4 sm:py-0 bg-gradient-to-r from-blue-800 to-blue-600' >
        <Navbar />
        <div className='max-w-[1220px] mx-auto' >
          <div className='max-w-2xl grid ' >
            <h1 className='text-6xl font-semibold text-slate-50 leading-[70px] md:mt-28   '>Creative <br /> Digital Agency</h1>
            <h1 className='text-sm my-3  text-slate-50 ' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Ea eligendi nulla perferendis</h1>
            <span className=' mt-3  mb-28' ><Button txt='Learn More' /> </span>
          </div>
        </div>
        <div></div>
      </div>
      <span className='text-center space-y-5 ' >
        <h6 className=' mt-20 text-blue-600' >OUR SERVICES</h6>
        <h1 className='font-semibold text-2xl ' >We Are Providing Digital services</h1>
      </span>
      <div className='max-w-full py-0 px-4 sm:py-0 mt-14  '>
        <div className='max-w-[1240px] grid grid-cols-1  mx-auto   ' >
          <Moves card={<MainCard explain={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo totam est, eaque provident eum veritatis magnam illum. Eius, quaerat!'} source={'/webs.jpg'} txt={'Web Development'} />}
            card2={<MainCard explain={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo totam est, eaque provident eum veritatis magnam illum. Eius, quaerat!'} source={'/webs.jpg'} txt={'GraphicDesign'} />}
            card3={<MainCard explain={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo totam est, eaque provident eum veritatis magnam illum. Eius, quaerat!'} source={'/webs.jpg'} txt={'Digital Marketing'} />} />
        </div>
        <Carousel source={'/bnda design .jpg'} />
      </div>
      <div className='max-w-full py-0 px-7 sm:py-0 mt-14  bg-blue-300 bg-opacity-40   '>
        <div className='max-w-[1240px] grid grid-cols-1 md:grid-cols-3  mx-auto  py-10 ' >
          <MainCard explain={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo totam est, eaque provident eum veritatis magnam illum. Eius, quaerat!'} source={'/webs.jpg'} txt={'Web Development'} />
          <MainCard explain={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo totam est, eaque provident eum veritatis magnam illum. Eius, quaerat!'} source={'/webs.jpg'} txt={'GraphicDesign'} />
          <MainCard explain={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo totam est, eaque provident eum veritatis magnam illum. Eius, quaerat!'} source={'/webs.jpg'} txt={'Digital Marketing'} />
        </div>
      </div>
      <div className='max-w-full py-0 px-7 sm:py-0 mt-14'>
        <div className='max-w-7xl grid grid-cols-1 space-x-32  mx-auto  py-10  ' >
          <Multiplesmoves card={<MainCard explain={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo totam est, eaque provident eum veritatis magnam illum. Eius, quaerat!'} source={'/webs.jpg'} txt={'Web Development'} />}
            card1={<Link href='https://nft-marketfarhan.vercel.app/' >  <Image width={500} className='mx-auto hover:scale-105 ease-in duration-300 ' height={100} src='/1.jpg' /></Link>}
            card2={<Link href='https://nft-marketfarhan.vercel.app/' >  <Image width={400} className='mx-auto hover:scale-105 ease-in duration-300 ' height={100} src='/image (4).jpg' /></Link>}
            card3={<Link href='https://nft-marketfarhan.vercel.app/' >  <Image width={500} className='mx-auto hover:scale-105 ease-in duration-300 ' height={100} src='/3.jpg' /></Link>}
            card4={<Link href='https://nft-marketfarhan.vercel.app/' >  <Image width={400} className='mx-auto hover:scale-105 ease-in duration-300 ' height={100} src='/4.jpg' /></Link>}
            card5={<Link href='https://nft-marketfarhan.vercel.app/' >  <Image width={400} className='mx-auto hover:scale-105 ease-in duration-300 ' height={100} src='/5.jpg' /></Link>}
            card6={<Link href='https://nft-marketfarhan.vercel.app/' >  <Image width={400} className='mx-auto hover:scale-105 ease-in duration-300 ' height={100} src='/6.jpg' /></Link>}
            card7={<Link href='https://nft-marketfarhan.vercel.app/' >  <Image width={400} className='mx-auto hover:scale-105 ease-in duration-300 ' height={100} src='/7.jpg' /></Link>}
            card8={<Link href='https://nft-marketfarhan.vercel.app/' >  <Image width={400} className='mx-auto hover:scale-105 ease-in duration-300 ' height={100} src='/8.jpg' /></Link>}
          />
        </div>
      </div>
      <div className='max-w-full py-0 px-7 sm:py-0 mt-14  bg-blue-300 bg-opacity-40'>
        <span className='text-center space-y-5 ' >
          <h6 className=' pt-16 text-blue-600' >OUR SERVICES</h6>
          <h1 className='font-semibold text-2xl ' >We Are Providing Digital services</h1>
        </span>
        <div className=' max-w-7xl grid grid-cols-1 md:grid-cols-3  mx-auto py-10 space-y-10 sm:space-y-0 ' >
          <Workerinfo source={'/dev3.jpg'} txt1={'M.Farhan Shafqut'} txt2={'Best Front End designer'} />
          <Workerinfo source={'/dev1.jpg'} txt1={'Marsd Majid'} txt2={'Best Back End designer'} />
          <Workerinfo source={'/dev2.jpg'} txt1={'Abu Zar'} txt2={'Best Full Web Developer'} />
        </div>
      </div>
      <PricesCards value={'$50/'} year={'450/'} value1={'$99/'} year1={'$1000/'} value2={'$150/'} year2={'$1700/'} />
      <div className='max-w-full py-0 px-7 sm:py-0 mt-14  bg-blue-500 bg-opacity-90 '>
        <div className=' max-w-7xl grid grid-cols-1 md:grid-cols-2  mx-auto py-10 space-y-10 sm:space-y-0  space-x-6 ' >
          <p className='hidden'></p>
          <Comments explain={`There are many variations of passages of Lorem Ipsum available, but the
majority have suffered alteration in some form, by injected humour,
or randomised words which don't look even slightly believable.
If you are going to use a passage of Lorem Ipsum, `} source={'/webs.jpg'} txt={'Muneeb Pararcha'} txt2={'CONSULTANT'} css={'py-5  text-center font-semibold'} />
          <Comments explain={`There are many variations of passages of Lorem Ipsum available, but the
majority have suffered alteration in some form, by injected humour,
or randomised words which don't look even slightly believable.
If you are going to use a passage of Lorem Ipsum, `} source={'/webs.jpg'} txt={'Ali Jawad'} txt2={'IT SPECALIST'} css={'py-5  text-center font-semibold'} />
        </div>
      </div>
      <div className='max-w-full py-0 px-7 sm:py-0 mt-14  my-8'>
        <div className='  grid grid-cols-1 md:flex  md:justify-center' >
          <div className='  flex-col justify-center my-10 md:my-24  max-w-sm  grid grid-cols-1   '>
            <h2 className='text-blue-600 my-2 md:my-0' >OUR BLOG</h2>
            <p className='font-semibold text-2xl  my-2 md:my-0'>Letest News & Blog</p>
            <p className=' my-2 md:my-0'>Lorem ipsum dolor sit amet, consectetur adipiscing
              sed do eiusmod tempor incididunt labo. </p>
            <Inputmail />
          </div>
          <div className=' flex-col max-w-[925px]  my-4 space-x-2  space-y-3 '>
            <span className='hidden'></span>
  
                          <BlogMove card={  <BlogCard txt={`Maecenas laoree efficiture sagittis
                          aliquam eleifend nisl.`} txt2={'Posted 7 MArch, 2020'} explain={`Lorem ipsum dolor sit amet, consectetur adipiscing
                          sed do eiusmod tempor incididunt labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore
                          eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident,`} css={' font-semibold'} />
                           } card2={ <BlogCard txt={`Maecenas laoree efficiture sagittis
                           aliquam eleifend nisl.`} txt2={'Posted 7 MArch, 2020'} explain={`Lorem ipsum dolor sit amet, consectetur adipiscing
                           sed do eiusmod tempor incididunt labore et dolore
                           magna aliqua. Ut enim ad minim veniam, quis
                           nostrud exercitation ullamco laboris nisi ut aliquip
                           ea commodo consequat. Duis aute irure dolor in
                           reprehenderit in voluptate velit esse cillum dolore
                           eu fugiat nulla pariatur. Excepteur sint occaecat
                           cupidatat non proident,`} css={' font-semibold'} />}
                           card3={ <BlogCard txt={`Maecenas laoree efficiture sagittis
                           aliquam eleifend nisl.`} txt2={'Posted 7 MArch, 2020'} explain={`Lorem ipsum dolor sit amet, consectetur adipiscing
                           sed do eiusmod tempor incididunt labore et dolore
                           magna aliqua. Ut enim ad minim veniam, quis
                           nostrud exercitation ullamco laboris nisi ut aliquip
                           ea commodo consequat. Duis aute irure dolor in
                           reprehenderit in voluptate velit esse cillum dolore
                           eu fugiat nulla pariatur. Excepteur sint occaecat
                           cupidatat non proident,`} css={' font-semibold'} />}
                           />  
          </div>
          <div />
        </div>
      </div>
    </div>
  )
}
