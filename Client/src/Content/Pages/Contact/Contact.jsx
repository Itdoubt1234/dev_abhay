import React from 'react'
import Form from './Components/Form';
import LandingBG from '../Home/Components/LandingBG';
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

let info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        content: '+91 1234567890'
    },
    {
        icon: <IoMdMail />,
        title: 'Email',
        content: 'sample@email.com'
    },
    {
        icon: <MdLocationPin />,
        title: 'Location',
        content: '385 Edgevalley Road London, Ontario, N5v0c2'
    },
]

function Contact() {

    return (
        <div className="w-full bg-white flex flex-col items-center">

            <div className="relative w-full">
                <LandingBG />

                <img className='h-[55vmin] absolute bottom-[5vh] right-[15vh]' src="/Home/image-14.png" alt="" />
                <div className='absolute top-1/2 -translate-y-1/2 ml-8 text-white'>
                    <h1 className='p-bold text-4xl'>Contact Us</h1>
                    <div className="flex items-center gap-1 text-sm">
                        <Link to={'/'}>Home</Link>
                        <IoIosArrowForward />
                        <Link to={'/contact'}>Contact Us</Link>
                    </div>
                </div>

            </div>

            <div 
            style={{boxShadow: '0 0 20px grey'}}
            className='w-[90vw] py-3 my-16 rounded-2xl flex justify-between'>
                {
                    info.map((item, index) =>
                        <div
                            className='flex p-2'
                            key={index}>
                            <span className='text-white bg-[#000D44] self-center p-3 mr-2 rounded-full text-lg'>{item.icon}</span>
                            <div className='border-l border-black pl-2'>
                                <h2 className='p-semibold'>{item.title}</h2>
                                <p className='text-sm'>{item.content}</p>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="w-[70vw] mb-16">
                <h1 className='p-bold text-3xl text-[#000D44] mb-8'>Quick Contact Us</h1>
                <Form />
            </div>
        </div>
    )
}

export default Contact