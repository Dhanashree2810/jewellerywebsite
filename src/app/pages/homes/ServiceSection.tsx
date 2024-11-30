import React from 'react'
import { BsTransparency } from "react-icons/bs";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";

export default function ServiceSection() {
    return (
        <div className="relative w-full px-4 lg:px-14 py-5 lg:py-14 bg-white">
            <div className="w-full px-4 py-14 bg-[#F5F5F5] rounded-md text-black">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-0 items-center justify-center">
                    <div className=" flex flex-col items-center justify-center border-r-none lg:border-r-2 lg:border-gray-400">
                        <LiaCertificateSolid size={40} className='text-[#A69076] font-bold bg-white rounded-full border-2 border-[#A69076] p-2' />
                        <h1 className=' mt-5 text-lg text-black font-semibold tracking-wide text-center'>Certified</h1>
                        <p className=' text-xs text-gray-500 text-center font-semibold'>Available certificates of <br /> authenticity </p>
                    </div>
                    <div className=' flex flex-col items-center justify-center border-r-none lg:border-r-2 lg:border-gray-400'>
                        <AiFillSafetyCertificate size={40}  className='text-[#A69076] font-bold bg-white rounded-full border-2 border-[#A69076] p-2'/>
                        <h1 className=' mt-5 text-lg text-black font-semibold tracking-wide text-center'>Secure</h1>
                        <p className=' text-xs text-gray-500 text-center font-semibold'>Certified marketplace <br /> since 2024 </p>
                    </div>

                    <div className=' flex flex-col items-center  justify-center border-r-none lg:border-r-2 lg:border-gray-400'>
                        <FaShippingFast size={40} className='text-[#A69076] font-bold bg-white rounded-full border-2 border-[#A69076] p-2'/>
                        <h1 className=' mt-5 text-lg text-black font-semibold tracking-wide text-center'>Shipping</h1>
                        <p className=' text-xs text-gray-500 text-center font-semibold'> Free , Fast and reliable <br /> worldwide </p>
                    </div>

                    <div className=' flex flex-col items-center  justify-center'>
                        <BsTransparency size={40} className='text-[#A69076] font-bold bg-white rounded-full border-2 border-[#A69076] p-2'/>
                        <h1 className=' mt-5 text-lg text-black font-semibold tracking-wide text-center'>Transparent</h1>
                        <p className=' text-xs text-gray-500 text-center font-semibold'> Hassle-free return <br /> policy </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
