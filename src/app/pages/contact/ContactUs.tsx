import React from 'react'
import { Button } from "@/components/ui/button";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { BsBoxSeam, BsCreditCard2FrontFill } from "react-icons/bs";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { PiHeadsetBold } from "react-icons/pi";


export default function ContactUs() {
    const contactdetlist = [
        {
            id: 1,
            title: 'P',
            desc: '+1 234 567 890'
        },
        {
            id: 2,
            title: 'E',
            desc: 'contact@info.com'
        },
        {
            id: 3,
            title: 'A',
            desc: '123 Fifth Avenue, New York, NY 10160'
        },
    ]

    return (
        <>
            <div className="relative w-full">
                <div className="w-full px-4 py-5 sm:px-8 sm:py-10 lg:px-48 lg:py-5 bg-[#FAF7F5]">
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className=" flex flex-col">
                            <div className="py-5 lg:py-20">
                                <h1 className=" text-black font-semibold text-center text-xl lg:text-5xl py-5 lg:py-10">
                                    Contact Us
                                </h1>
                                <p className='text-sm lg:text-lg text-center italic leading-3 lg:leading-10 tracking-wide'>
                                    Have a question? Feel free to get in touch with us, <br />
                                    we&apos;ll get back to you shortly.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  justify-center lg:mt-20">
                        <div className="flex flex-col space-y-2">
                            <h1 className=' p-2 text-lg lg:text-xl'>Contact Details</h1>
                            {contactdetlist.map((xyz) => (
                                <div className="" key={xyz.id}>
                                    <div className=' flex justify-normal'>
                                        <div className="flex flex-row justify-center items-center gap-3 text-left mx-5">
                                            <h1 className=' font-bold text-sm lg:text-xl text-gray-500 py-1 italic'>{xyz.title} : </h1>
                                            <p className='text-sm lg:text-xl text-gray-500 font-medium leading-5 italic'>{xyz.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className='flex flex-col lg:mt-20'>
                                <div className="flex flex-row justify-start items-start gap-2 text-left">
                                    <h1 className='p-2 text-lg lg:text-xl'>Follow Us</h1>
                                </div>

                                <div className="flex flex-row justify-start items-start gap-2">
                                    <FaFacebook className="rounded-full p-2 text-black bg-white border-2 border-gray-500 hover:bg-red-50 hover:cursor-pointer hover:text-blue-700 hover:border-blue-700" size={35} />
                                    <FaLinkedin className="rounded-full p-2 text-black bg-white border-2 border-gray-500 hover:bg-red-50 hover:cursor-pointer hover:text-purple-600 hover:border-purple-600" size={35} />
                                    <FaTwitter className="rounded-full p-2 text-black bg-white border-2 border-gray-500 hover:bg-red-50 hover:cursor-pointer hover:text-blue-500 hover:border-blue-500" size={35} />
                                    <FaYoutube className="rounded-full p-2 text-black bg-white border-2 border-gray-500 hover:bg-red-50 hover:cursor-pointer hover:text-red-500 hover:border-red-500" size={35} />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className=' space-y-4'>
                                <div className="grid grid-cols-1 gap-2">
                                    <Label>
                                        Name <span className="text-red-600">*</span>
                                    </Label>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                        <Input
                                            className="px-4 h-10 my-2 text-gray-700 text-sm bg-white border-gray-200 rounded-none"
                                            type="text"
                                            name="firstname"
                                            id="firstname"
                                            placeholder="First Name"
                                        />
                                        <Input
                                            className="px-4 h-10 my-2 text-gray-700 text-sm bg-white border-gray-200 rounded-none"
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-2">
                                    <Label>
                                        Email <span className="text-red-600">*</span>
                                    </Label>
                                    <Input
                                        className="px-4 h-10 my-2 text-gray-700 text-sm bg-white border-gray-200 rounded-none"
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-2">
                                    <Label>
                                        Message <span className="text-red-600">*</span>
                                    </Label>
                                    <Textarea
                                        className="form-control px-4 h-28 my-2 text-gray-700 text-sm bg-white border-gray-200 rounded-none"
                                        placeholder="Type your message here."
                                    ></Textarea>
                                </div>

                                <Button className="rounded-none my-3 w-fit text-center bg-white text-sm text-gray-700 hover:bg-transparent p-5">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full px-4 lg:px-20 py-14 bg-[#F5F5F5] rounded-md text-black">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-0 items-center justify-center">
                        <div className="flex flex-row gap-4 items-center justify-start lg:justify-center">
                            <BsBoxSeam size={40} className="text-[#A69076] font-bold" />
                            <div className="flex flex-col justify-start items-start">
                                <h1 className="text-sm lg:text-lg text-black font-semibold tracking-wide">Free Shipping</h1>
                                <p className="text-xs text-gray-500 font-medium">Free shipping for orders over ₹10000</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 items-center">
                            <RiMoneyRupeeCircleFill size={40} className="text-[#A69076] font-bold" />
                            <div className="flex flex-col justify-start items-start">
                                <h1 className="text-sm lg:text-lg text-black font-semibold tracking-wide">Money Guarantee</h1>
                                <p className="text-xs text-gray-500 font-medium">Within 30 days for an exchange</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 items-center">
                            <PiHeadsetBold size={40} className="text-[#A69076] font-bold" />
                            <div className="flex flex-col justify-start items-start">
                                <h1 className="text-sm lg:text-lg text-black font-semibold tracking-wide">Online Support</h1>
                                <p className="text-xs text-gray-500 font-medium">24 hours a day, 7 days a week</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 items-center">
                            <BsCreditCard2FrontFill size={40} className="text-[#A69076] font-bold" />
                            <div className="flex flex-col justify-start items-start">
                                <h1 className="text-sm lg:text-lg text-black font-semibold tracking-wide">Flexible Payment</h1>
                                <p className="text-xs text-gray-500 font-medium">Pay with multiple Credit Cards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
