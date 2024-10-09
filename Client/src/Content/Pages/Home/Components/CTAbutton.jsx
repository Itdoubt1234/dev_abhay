import React from 'react'
import { Link } from 'react-router-dom'
import { BsSendFill } from "react-icons/bs";

function CTAbutton() {
    return (
        <Link className='bg-btn-active py-2 px-6 mt-4 rounded-full p-medium flex w-fit items-center gap-2' to={'/contact'} >
            <span>Let's Turn Your Idea into Reality </span>
            <BsSendFill />
        </Link>
    )
}

export default CTAbutton