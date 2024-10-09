import React from 'react'

function LandingBG() {
    return (
        <div className='bg-gradient-to-l from-[#051629] via-[#000D44] to-[#301859] h-screen w-full relative overflow-hidden'>
            <div className='bg-white absolute bottom-[-25vh] right-[-15vh] h-1/2 w-[80vw] rotate-[-20deg]'></div>

            <div className='h-[90vh] w-[90vh] relative left-[50%] bottom-[-25%]'>
                <img className='h-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' src="/Home/Ellipse-1.png" alt="" />
                <img className='h-3/4 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' src="/Home/Ellipse-2.png" alt="" />
                <img className='h-1/2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' src="/Home/Ellipse-3.png" alt="" />
            </div>

        </div>
    )
}

export default LandingBG