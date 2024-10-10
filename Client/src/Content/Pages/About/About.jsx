import React from 'react'
import LandingBG from '../Home/Components/LandingBG'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import Comp5 from '../Home/Components/Comp5';

function About() {
    return (
        <div className="">

            <div className="relative w-full">
                <LandingBG />

                <img className='h-[65vmin] absolute bottom-[5vh] right-[15vh]' src="/Home/image-27.png" alt="" />

                <div className='absolute top-1/2 -translate-y-1/2 ml-8 text-white'>
                    <h1 className='p-bold text-4xl mb-3'>About Us</h1>
                    <div className="flex items-center gap-1 text-sm">
                        <Link to={'/'}>Home</Link>
                        <IoIosArrowForward />
                        <Link to={'/about'}>About Us</Link>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 ">
                        <img
                            src="/Home/image-19.png"
                            alt="About Us"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="md:w-1/2 md:pl-8">
                        <h1 className="text-4xl font-bold mb-4 text-blue-950">
                            Your Trusted Development and Digital Marketing Parter
                        </h1>
                        <p className="text-lg text-gray-700 mb-4">
                            officiis numquam, dolore voluptatibus placeat natus tempore sit,
                            asperiores impedit itaque cum architecto, similique laboriosam
                            itaque cum architecto, similique laboriosam. Itaque molestiae
                            officiis.
                        </p>

                        <p className="text-gray-700 mb-4">
                            ☑️ officiis numquam, dolore voluptatibus placeat
                            <br />
                            ☑️ natus tempore Lorem ipsum dolor sit amet consectetur adipisicing
                            elit,
                            <br />
                            ☑️asperiores impedit itaque cum architecto,
                            <br />
                            ☑️Itaque molestiae officiis voluptas atque?
                        </p>

                        <button className="bg-gradient-to-r from-red-500  to-yellow-500  text-white py-2 px-6 rounded-full font-semibold">
                            Explore Services
                        </button>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 gap-4 py-8 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pl-8">
                        <h1 className="text-4xl font-bold mb-4 text-blue-950">Who We Are</h1>
                        <p className="text-lg text-gray-700 mb-4">
                            officiis numquam, dolore voluptatibus placeat natus tempore sit,
                            asperiores impedit itaque cum architecto, similique laboriosam
                            itaque cum architecto, similique laboriosam. Itaque molestiae
                            officiis.
                        </p>

                        <p className="text-gray-700 mb-4">
                            officiis numquam, dolore voluptatibus placeat natus tempore sit,
                            asperiores impedit itaque cum architecto, similique laboriosam.
                            Itaque molestiae officiis voluptas atque?
                        </p>

                        <button className="bg-gradient-to-r from-red-500  to-yellow-500  text-white py-2 px-6 rounded-full font-semibold">
                            Explore Services
                        </button>
                    </div>
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <img
                            src='/Home/image-18.png'
                            alt="About Us"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 ">
                        <img
                            src='/Home/image-20.png'
                            alt="About Us"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="md:w-1/2 md:pl-8">
                        <h1 className="text-4xl font-bold mb-4 text-blue-950">Our Mission</h1>
                        <p className="text-lg text-gray-700 mb-4 pb-10">
                            officiis numquam, dolore voluptatibus placeat natus tempore sit,
                            asperiores impedit itaque cum architecto, similique laboriosam
                            itaque cum architecto, similique laboriosam. Itaque molestiae
                            officiis.
                        </p>

                        <button className="bg-gradient-to-r from-red-500  to-yellow-500  text-white py-2 px-6 rounded-full font-semibold">
                            Explore Services
                        </button>
                    </div>
                </div>
            </div>

            {/* Technology */}

            <Comp5 />

        </div>
    )
}

export default About