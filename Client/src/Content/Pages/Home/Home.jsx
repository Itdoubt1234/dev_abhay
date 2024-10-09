import Comp1 from './Components/Comp1'
import CTAbutton from './Components/CTAbutton';
import Form from '../Contact/Components/Form';
import { LuMoveRight } from "react-icons/lu";
import LandingBG from './Components/LandingBG';

// for cards in WHY CHOOSE US

let cards = [
  {
    heading: "Quality",
    content: "We strive to deliver top-notch products, ensuring meticulous attention to every detail."
  },
  {
    heading: "Reliability",
    content: "Our teams consist of highly skilled and certified engineers possessing specialized domain knowledge."
  },
  {
    heading: "Flexibility",
    content: "Our team prioritizes client requirements and maintains transparency throughout the development process."
  },
  {
    heading: "Competence",
    content: "Our team comprises expert developers with domain expertise spanning across all industries."
  },
  {
    heading: "Competence",
    content: "Our team comprises expert developers with domain expertise spanning across all industries."
  }
];

// for description in contact form

let CF = [
  {
    heading: "Address:",
    content: '385 Edgevalley Road London, Ontario, N5v0c2'
  },
  {
    heading: "UK Phone:",
    content: '+1 1234567890'
  },
  {
    heading: "India Phone:",
    content: '+91 1234567890'
  },
  {
    heading: "Email:",
    content: 'info@dummyemail.com'
  }
]

// for OUR EXPERTISE

let tech = [
  {
    img: '/Home/image-8.png',
    title: 'Online Stores',
    redirect: '#'
  },
  {
    img: '/Home/image-9.png',
    title: 'Web Scraping',
    redirect: '#'
  },
  {
    img: '/Home/image-10.png',
    title: 'Dropshipping',
    redirect: '#'
  },
  {
    img: '/Home/image-11.png',
    title: 'IoT',
    redirect: '#'
  },
  {
    img: '/Home/image-12.png',
    title: 'Python',
    redirect: '#'
  },
  {
    img: '/Home/image-13.png',
    title: 'Social Media',
    redirect: '#'
  }
]


function Home() {
  return (
    <div className="w-full flex flex-col">

      <div className="relative h-screen w-full">

        <LandingBG />

        <div className='absolute top-0 h-screen bg-transparent flex w-full justify-center p-10 text-white'>

          <div className="flex flex-col gap-1 items-end mt-24">
            <p className='text-5xl p-semibold'>Welcome to <span className='text-gradient'>IT DOUBT</span></p>
            <p className='italic'>-Shaping the Future of Technology</p>
          </div>

          <div className='absolute top-1/2 -translate-y-1/3 left-[2rem]'>
            <p className='text-2xl p-semibold w-[30vw] leading-9'><span className="text-gradient text-3xl">UNLOCK</span> your digital potential with IT DOUBT, where technology meets <span className="text-gradient text-3xl">INNOVATION</span> and opportunity knows <span className="text-gradient text-3xl">NO BORDERS</span></p>

            <CTAbutton />

          </div>

          <div className="absolute bottom-[4rem] right-[6rem]">
            <Comp1 />
          </div>

        </div>

      </div>


      {/* WHY CHOOSE US */}

      <div className='w-full text-[#262F44] py-16 px-8'>

        <div className="flex flex-col items-center">
          <h1 className='p-bold text-3xl text-center mb-4'>Why Choose Us</h1>

          <p className='text-center mb-6 w-2/3'>The longer we've been in the industry, the stronger our solutions have become! With over a decade of experience, we've partnered with numerous brands, offering our expertise along the way.</p>
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
            <img className='h-full object-cover' src="/Home/image-3.png" alt="" />
            <img className='absolute z-[2] bottom-0 w-[80%]' src="/Home/image-4.png" alt="" />
          </div>

        </div>

      </div>


      {/* Additional KB element */}

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


      {/* OUR EXPERTISE */}

      <div className='w-full h-screen bg-gradient-to-r from-[#291756] to-[#051629] px-8 py-10'>

        <h1 className='text-white p-bold text-3xl text-center'>Our Expertise</h1>

        <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-8">
          {
            tech.map((card, index) => (
              <div
                key={index}
                className={` ${index === 1 || index === 3 ? `col-span-2` : ''
                  } bg-white rounded-2xl overflow-hidden h-[250px]`}
              >

                <div className='h-[80%]'>
                  <img className='h-full w-full object-cover' src={card.img} alt={card.title} />
                </div>

                <div className="flex h-[20%] items-center justify-between px-4 text-lg p-medium">
                  <h2 className='capitalize '>{card.title}</h2>
                  <LuMoveRight className='text-3xl' />
                </div>
              </div>
            ))
          }
        </div>

      </div>


      {/* CONTACT FORM */}

      <div className='flex gap-8 py-16 px-8 bg-white'>

        <div className='grow flex flex-col gap-2 text-[#000D44]'>

          <div className='flex flex-col'>
            <span className='text-2xl p-semibold'>Get in Touch with</span>
            <span className='text-5xl p-bold'>Our <br />Experts</span>
            <span className='text-sm mt-2'>Let's get acquainted with you.</span>
          </div>

          {
            CF.map((obj, index) =>
              <div
                className='flex flex-col mt-2'
                key={index}>
                <span className='p-semibold'>{obj.heading}</span>
                <span className='text-sm'>{obj.content}</span>
              </div>
            )
          }

        </div>

        <div className='grow'>
          <h1 className='text-2xl p-semibold mb-6 text-[#262F44]'>Let's get acquainted with you.</h1>
          <Form />
        </div>

      </div>

    </div>
  )
}

export default Home