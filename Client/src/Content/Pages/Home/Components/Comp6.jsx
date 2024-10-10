import React from 'react'
import CTAbutton from './CTAbutton'

function Comp6() {
    return (
        <div className='w-full bg-white p-8 text-white'>

            <div className="relative">

                <img className='' src="/Home/image-6.png" alt="" />
                <img className='absolute top-0' src="/Home/image-7.png" alt="" />

                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col gap-2 items-center justify-center text-center w-full'>
                    <span className='text-4xl p-light'>Our resilient mobile and web app development </span>
                    <span className='text-4xl p-bold'>Solutions elevate your business to the pinnacle!</span>
                    <p className='w-1/2 mt-2'>Allow our team to offer you a complimentary technical proposal for your upcoming enterprise custom project, with no obligations.</p>

                    <CTAbutton />
                </div>

            </div>

        </div>
    )
}

export default Comp6