import { useState, useRef } from 'react'
import { countryDialCodes } from '../../../../utils/countryCodes'
import { useDispatch, useSelector } from 'react-redux';
import { setCountryCode } from '../../../../Store/Contact/countryCodeSlice';
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { BsSendFill } from "react-icons/bs";

const userId = import.meta.env.REACT_EMAIL_USER_ID
const serviceId = import.meta.env.REACT_EMAIL_SERVICE_ID
const templateId = import.meta.env.REACT_EMAIL_TEMPLATE_ID

emailjs.init(userId);

function Form() {
    const [isSubmitting, setIsSubmitting] = useState(false);
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
        } catch (e) {
            setIsSubmitting(false);
            console.log(e)
        }
    };

    const countryCode = useSelector(state => state.countryCodeReducer.value)
    const dispatch = useDispatch()

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
            <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm p-medium text-[#4670FE]">
                    Full Name
                </label>
                <input
                    type="text"
                    id="fullName"
                    {...register('fullName', { required: true })}
                    placeholder="Full Name"
                    className="mt-1 w-full outline-none border-b border-black/30 focus:border-black py-2 px-4"
                />
                {errors.fullName && <p className="text-red-500 text-xs">Full Name is required</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm p-medium text-[#4670FE]">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                    placeholder="Email"
                    className="mt-1 w-full outline-none border-b border-black/30 focus:border-black py-2 px-4"
                />
                {errors.email && <p className="text-red-500 text-xs">Invalid email address</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="contactNumber" className="block text-sm p-medium text-[#4670FE]">
                    Contact Number
                </label>
                <div className="flex gap-2">
                    <div className="mt-1 py-2 px-4 flex items-center gap-4 bg-transparent">
                        <div className="w-10">
                            <img className="object-contain" src={`https://flagcdn.com/256x192/${countryCode}.png`} alt="" />
                        </div>
                        <select
                            className="mt-1 outline-none"
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
                        className="mt-1 w-full outline-none border-b border-black/30 focus:border-black py-2 px-4"
                    />
                </div>
                {errors.contactNumber && <p className="text-red-500 text-xs">Contact Number is required</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-sm p-medium text-[#4670FE]">
                    Description (optional)
                </label>
                <div
                    id="description"
                    ref={descriptionRef}
                    className="mt-1 w-full outline-none border-b border-black/30 focus:border-black py-2 px-4"
                    contentEditable={true}
                />
            </div>
            <button
                type="submit"
                className={`bg-btn-active text-white py-2 px-6 mt-10 rounded-full p-medium flex w-fit items-center gap-2 ${isSubmitting && 'opacity-80'}`}
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Submitting...' : `Let's Turn Your Idea into Reality`}
                <BsSendFill />
            </button>
        </form>
    )
}

export default Form