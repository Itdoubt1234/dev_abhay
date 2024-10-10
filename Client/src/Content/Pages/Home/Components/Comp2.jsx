import React from 'react'

const cards = [
    {
        heading: "Tailored Solutions",
        content: "Our software development expertise customizes solutions for businesses based on their specific needs."
    },
    {
        heading: "Cutting-Edge Services",
        content: "We offer a comprehensive range of services to help you leverage the full potential of digital technology."
    },
    {
        heading: "Different Approach",
        content: "Our solutions are highly adaptable to suit any business while enhancing their durability and reliability."
    },
    {
        heading: "Bespoke Process",
        content: "Our objective is to offer personalized solutions that aid in the success of your business."
    }
];

function Comp2() {
    return (
        <div className="py-16 px-8">
            <div className='text-[#000D44] flex flex-col justify-center items-center mb-4'>
                <span className='p-regular text-3xl'>Transforming businesses through</span>
                <span className="p-bold text-3xl">excellence and expertise.</span>
            </div>

            <div className='flex justify-center gap-20 mt-8'>
                {/* #E5EDFF */}
                <div className='flex flex-col gap-6'>
                    {
                        cards.map((card, index) =>
                            <div
                                className='p-3 rounded-xl shadow-[10px_-10px_0_#E5EDFF] w-[40vw]'
                                key={index}>
                                <h1 className='text-lg p-medium mb-1'>{card.heading}</h1>
                                <p className='text-sm'>{card.content}</p>
                            </div>
                        )
                    }
                </div>

                <div className='relative rounded-2xl overflow-hidden w-[30vw]'>
                    <img className='h-full object-cover' src="/Home/image-17.png" alt="" />
                </div>

            </div>

        </div>
    )
}

export default Comp2