import React from 'react'

function Comp3() {
    return (
        <div
            className=" h-96 overflow-hidden p-10 w-full   bg-slate-100 bg-center"
            style={{
                backgroundImage: `url('/Home/image-24.png')`,
            }}
        >
            <div className="flex items-center flex-row justify-center gap-20  h-96 float-start pl-10 ">
                <img src='/Home/image-21.png' alt="/" className="w-96 h-auto object-contain " />
                <img src='/Home/image-22.png' alt="/" className="w-60 h-80 object-contain " />
                <div className="mb-80 flex flex-row gap-5">
                    <img
                        src='/Home/image-23.png'
                        alt="/"
                        className="w-20 h-40 object-contain pt-10 "
                    />
                    <h1 className="text-2xl font-bold pt-20 text-white">
                        Online Beer Store
                        <br />
                        <p className="text-xl">www.beerstore.com.au ➡️</p>
                        <hr className="text-white" />
                    </h1>
                </div>
            </div>
            <div className="mt-28  ">
                <p className="text-white ">The Beerstore is a family run business,</p>
            </div>
        </div>
    )
}

export default Comp3