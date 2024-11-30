'use client'
import { IoDiamondOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { SiXstate } from "react-icons/si";
import { ImPinterest2 } from "react-icons/im";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";


export default function Footer() {
    return (
        <>
            <div className=" bg-[#FAF3E6] text-black p-10 lg:p-14 max-w-full">
                <div className=" grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-5 lg:gap-0  my-12">
                    <div className=''>
                        <h1 className='font-bold text-xl text-black'>Where about</h1>
                        <h2 className=' text-sm text-gray-600  mt-5 font-normal'>
                            <span> 4517 Washington Ave. Manchester. <br /> Kentucky 39495</span>
                        </h2>
                        <h3 className=' text-sm text-gray-600  mt-5 font-semibold'>
                            Contact <br />
                            <span className=" font-normal">(808) 555-0111</span>
                        </h3>
                        <h4 className=' text-sm text-gray-600  mt-5 font-semibold'>
                            Mail Box <br />
                            <span className=" font-normal">hello@lavishglamour.io</span>
                        </h4>
                    </div>

                    <div className=''>
                        <h1 className='font-bold text-lg text-black'>Pages</h1>
                        <h2 className=' text-sm text-gray-600  mt-5 font-normal'>About Us</h2>
                        <h3 className=' text-sm text-gray-600  mt-5 font-normal'>Categories</h3>
                        <h4 className=' text-sm text-gray-600  mt-5 font-normal'>Shop</h4>
                        <h4 className=' text-sm text-gray-600  mt-5 font-normal'>Contact Us</h4>
                    </div>

                    <div className=''>
                        <h1 className='font-bold text-lg text-black'>Resource</h1>
                        <h2 className=' text-sm text-gray-600  mt-5 font-normal'>FAQ</h2>
                        <h3 className=' text-sm text-gray-600  mt-5 font-normal'>Reviews</h3>
                        <h4 className=' text-sm text-gray-600  mt-5 font-normal'>Blogs</h4>
                        <h4 className=' text-sm text-gray-600  mt-5 font-normal'>Return Policy</h4>
                    </div>

                    <div className=''>
                        <h1 className='font-bold text-lg text-black'>Utilies</h1>
                        <h2 className=' text-sm text-gray-600  mt-5 font-normal'>Style Guide</h2>
                        <h3 className=' text-sm text-gray-600  mt-5 font-normal'>Error 404</h3>
                        <h4 className=' text-sm text-gray-600  mt-5 font-normal'>Licensing</h4>
                        <h4 className=' text-sm text-gray-600  mt-5 font-normal'>Changelog</h4>
                    </div>

                    <div className=''>
                        <h1 className='font-bold text-lg leading-8 text-black'>Subscribe</h1>
                        <div className=' flex flex-col mb-2'>
                            <Input
                                type="text"
                                className="w-full px-1 h-10 pl-10 my-1 bg-transparent border border-[#967F50] rounded-full text-sm"
                                name="name"
                                id="name"
                                placeholder="Enter Your Name"
                            />
                            <Input
                                type="email"
                                className="w-full px-1 h-10 pl-10 my-1 bg-transparent border border-[#967F50] rounded-full text-sm"
                                name="name"
                                id="name"
                                placeholder="Enter Email"
                            />
                        </div>
                        <Button className=' font-semibold text-white rounded-l-full rounded-r-full bg-[#967F50] p-3 w-72'>Submit</Button>
                    </div>
                </div>
            </div>

            <div className=' bg-black p-3 text-white grid grid-cols-1 lg:grid-cols-3 justify-center items-center'>
                <p className=' text-sm text-center'>© 2024 RadEI Company Limited. All rights reserved.
                </p>
                <div className="flex flex-row justify-center items-center text-center">
                    <IoDiamondOutline className="rounded-full p-2 text-white" size={40} />
                    <h1>RadEI</h1>
                </div>
                <div className=" flex justify-center lg:justify-end gap-2 mt-2 lg:mt-0">
                    <FaLinkedin className="rounded-full p-2 text-white bg-gray-800 hover:bg-red-50 hover:cursor-pointer hover:text-black" size={35} />
                    <FiFacebook className="rounded-full p-2 text-white bg-gray-800 hover:bg-red-50 hover:cursor-pointer hover:text-black" size={35} />
                    <SiXstate className="rounded-full p-2 text-white bg-gray-800 hover:bg-red-50 hover:cursor-pointer hover:text-black" size={35} />
                    <ImPinterest2 className="rounded-full p-2 text-white bg-gray-800 hover:bg-red-50 hover:cursor-pointer hover:text-black" size={35} />
                </div>
            </div>         
        </>
    )
}
