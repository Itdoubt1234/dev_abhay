import React from 'react'
import LandingBG from '../Home/Components/LandingBG'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

function Blogs() {

    function Card() {
        return (
            <div className="overflow-hidden rounded-2xl shadow-xl h-fit">

                <img className='h-[35%] w-full object-cover rounded-2xl' src="/Home/image-16.png" />

                <div className="flex flex-col gap-2 p-4">
                    <h2 className='p-semibold text-lg'>A blend of art and science driving success</h2>

                    <p className='line-clamp-2 ellipsis text-sm'>In the ever-evolving digital landscape, where online presence is paramount In the ever-evolving digital landscape, where online presence is paramount</p>

                    <div className="flex justify-between text-sm p-medium mt-4">
                        <p className='opacity-60'>January 15, 2024</p>
                        <Link to={'#'}>Read More</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='bg-white'>
            <div className="relative w-full">
                <LandingBG />

                <img className='h-[65vmin] absolute bottom-[5vh] right-[15vh]' src="/Home/image-15.png" alt="" />

                <div className='absolute top-1/2 -translate-y-1/2 ml-8 text-white'>
                    <h1 className='p-bold text-4xl mb-3'>Blogs</h1>
                    <div className="flex items-center gap-1 text-sm">
                        <Link to={'/'}>Home</Link>
                        <IoIosArrowForward />
                        <Link to={'/blogs'}>Blogs</Link>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-6 px-8 py-16">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <div className="flex justify-center mb-16">
                <Link className='bg-btn-active text-white px-6 py-2 rounded-full p-semibold' to={'#'}>Explore more</Link>
            </div>
        </div>
    )
}

export default Blogs