import React from 'react'
import CTAbutton from './CTAbutton'

function Comp4() {
    return (
        <div className='w-full bg-white px-8 py-16 text-white'>

            <div className="relative">
                <img className='' src="/Home/image-5.png" alt="" />
                <img className='absolute bottom-[-5%] right-0 h-[120%]' src="/Home/image-26.png" alt="" />

                <div className='absolute top-1/2 -translate-y-1/2 left-[7%] w-1/2 flex flex-col gap-2'>
                    <div className='text-black flex flex-col'>
                        <span className='p-medium text-2xl'>Together, Let's Shape the</span>
                        <span className='text-3xl p-bold'>Future of Technology</span>
                    </div>

                    <p className='text-black p-regular'>Allow our team to offer you a complimentary technical proposal for your upcoming enterprise custom project, with no obligations.</p>

                    <CTAbutton />
                </div>
            </div>

        </div>
    )
}

export default Comp4