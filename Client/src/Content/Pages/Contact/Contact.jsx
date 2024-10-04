import React, { useState, useRef } from 'react'
import { countryDialCodes } from '../../../utils/countryCodes'
import { useDispatch, useSelector } from 'react-redux';
import { setCountryCode } from '../../../Store/Contact/countryCodeSlice';
import { LuMoveUpRight } from "react-icons/lu";
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'

const userId = import.meta.env.REACT_EMAIL_USER_ID
const serviceId = import.meta.env.REACT_EMAIL_SERVICE_ID
const templateId = import.meta.env.REACT_EMAIL_TEMPLATE_ID

emailjs.init(userId);

function Contact() {

    const [form, setForm] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const descriptionRef = useRef(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        const description = descriptionRef.current.innerText;
        const templateParams = {
            fullName: data.fullName,
            email: data.email,
            contactNumber: data.contactNumber,
            description: description,
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams)
            setForm(false)
            setSuccess(true)
        } catch (e) {
            setIsSubmitting(false);
            console.log(e)
        }
    };

    const countryCode = useSelector(state => state.countryCodeReducer.value)
    const dispatch = useDispatch()

    return (
        <>
            <div className='w-full h-screen relative bg-[#BF8BFF]'>
                <img className='h-full w-full object-cover opacity-30 blur-sm' src="https://media.istockphoto.com/id/1340856012/photo/happy-businessmen-shaking-hands-on-a-meeting-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=NWrQfHNdkbwyeklUSt_xDDqD4GXAMnweRMaEmt4IHs8=" alt="" />

                {
                    !form && !success &&
                    <button
                        id='connect-btn'
                        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[#FAF9F6] bg-[#FDBC5E] rounded-full py-2 px-4 flex items-center gap-2 text-lg shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500 transition duration-300 ease-in-out transform hover:scale-105 font-medium"
                        onClick={() => setForm(true)}
                    >
                        Let's Connect
                        <LuMoveUpRight className="mt-0.5" />
                    </button>
                }
            </div>

            {
                form &&
                <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            {...register('fullName', { required: true })}
                            placeholder="Full Name"
                            className="mt-1 block w-full rounded rounded-tr-3xl rounded-bl-3xl outline-none border border-black/40 py-2 px-4"
                        />
                        {errors.fullName && <p className="text-red-500">Full Name is required</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                            placeholder="Email"
                            className="mt-1 block w-full rounded rounded-tr-3xl rounded-bl-3xl outline-none border border-black/40 py-2 px-4"
                        />
                        {errors.email && <p className="text-red-500">Invalid email address</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                            Contact Number
                        </label>
                        <div className="flex gap-2">
                            <div className="mt-1 block rounded rounded-tr-3xl rounded-bl-3xl outline-none border border-black/40 py-2 px-4 flex items-center gap-2 bg-[#FAF9F6]">
                                <div className="w-10">
                                    <img className="object-contain" src={`https://flagcdn.com/256x192/${countryCode}.png`} alt="" />
                                </div>

                                <select
                                    className='bg-[#FAF9F6] outline-none'
                                    {...register('countryCode', { required: true })}
                                    id="countryCode"
                                    name="countryCode"
                                    onChange={(e) => dispatch(setCountryCode(e.target.value))}
                                >
                                    {Object.keys(countryDialCodes).map((key) => (
                                        <option key={key} value={countryDialCodes[key]}>
                                            {countryDialCodes[key]} ({key.toUpperCase()})
                                        </option>
                                    ))}
                                </select>

                            </div>
                            <input
                                type="tel"
                                id="contactNumber"
                                {...register('contactNumber', { required: true })}
                                placeholder="Contact Number"
                                className="mt-1 block w-full rounded rounded-tr-3xl rounded-bl-3xl outline-none border border-black/40 py-2 px-4"
                            />
                        </div>
                        {errors.contactNumber && <p className="text-red-500">Contact Number is required</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description (optional)
                        </label>
                        <div
                            id="description"
                            ref={descriptionRef}
                            className="mt-1 block w-full rounded rounded-tr-3xl rounded-bl-3xl outline-none border border-black/40 py-2 px-4 bg-[#FAF9F6]"
                            contentEditable={true}
                        />
                    </div>
                    <button
                        type="submit"
                        className={`font-semibold text-lg text-[#FAF9F6] bg-[#FDBC5E] w-full py-1.5 mt-1 rounded-full ${isSubmitting && 'opacity-80'}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            }

            {
                success &&
                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center text-white'>
                    <h1 className='font-bold text-6xl mb-8'>SUCCESS!</h1>
                    <p className='text-2xl font-medium'>Thanks for selecting our service!
                        <br />
                        We'll be in touch with you shortly...
                    </p>

                    <Link to='/'>
                        <button
                            className="flex items-center gap-2 mt-8 text-[#FAF9F6] bg-[#FDBC5E] rounded-full py-2 px-4 text-lg shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500 transition duration-300 ease-in-out transform hover:scale-105 font-medium"
                        >
                            Go to Homepage
                            <LuMoveUpRight className="mt-0.5" />
                        </button>
                    </Link>
                </div>
            }
        </>
    )
}

export default Contact