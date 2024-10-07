import React from 'react'
import Comp1 from './Components/Comp1'
import { Link } from 'react-router-dom'
import { BsSendFill } from "react-icons/bs";

function Home() {
  return (
    <div className="w-full flex flex-col">

      <div className='bg-gradient-to-l from-[#051629] via-[#000D44] to-[#301859] h-screen flex w-full justify-center p-10 text-white'>

        <div className="flex flex-col gap-1 items-end mt-24">
          <p className='text-5xl p-semibold'>Welcome to <span className='text-gradient'>IT DOUBT</span></p>
          <p className='italic'>-Shaping the Future of Technology</p>
        </div>

        <div className='absolute top-1/2 -translate-y-1/3 left-[2rem]'>
          <p className='text-2xl p-semibold w-[30vw] leading-9'><span className="text-gradient text-3xl">UNLOCK</span> your digital potential with IT DOUBT, where technology meets <span className="text-gradient text-3xl">INNOVATION</span> and opportunity knows <span className="text-gradient text-3xl">NO BORDERS</span></p>

          <Link className='bg-btn-active py-2 px-6 mt-4 rounded-full p-medium flex w-fit items-center gap-2' to={'/contact'} >
            <span>Let's Turn Your Idea into Reality </span>
            <BsSendFill />
          </Link>

        </div>

        <div className="absolute bottom-[4rem] right-[6rem]">
          <Comp1 />
        </div>

      </div>

      <div className='h-screen p-10'>
        <h1 className='text-[#000D44] p-bold text-4xl text-center m-6'>Who we are</h1>

        <div className="flex items-center">
          <img className='w-[30%] relative z-[2] rounded-2xl' src="/Home/image-2.png" alt="" />
          <div className='relative z-1 -ml-6 w-fit bg-gradient-to-r from-[#D8CBED] from-10% via-[#C8D8FE] to-[#CADFFD] bg-tilt-[258.13deg] rounded-tr-full rounded-br-full p-16'>
            <h1 className='text-2xl p-medium'>IT DOUBT- Your Partner in Tech Innovation</h1>
            <br />
            <p className='text-sm'>IT DOUBT is a global company, working with customers, staff members, and students from various nations. With a fully remote work model, we bring together talent and technology, breaking down geographical barriers to deliver excellence in every project.
              <br /><br />
              Our specialty at IT DOUBT is providing robust, tailored technology solutions that advance companies. From innovative web and app development to comprehensive support and maintenance, our team of experts ensures that you can scale your operations without any technical barriers. Our proficiency spans across cutting-edge technologies like Java, Python, React, Node.js, Shopify, and many others, enabling us to cater to a diverse range of industries.
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Home