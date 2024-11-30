import { Button } from '@/components/ui/button'
import Image from 'next/image'
import banner4 from '@/assets/images/banner20.jpg'
import banner23 from '@/assets/images/pendant10.jpg'
import { PiArrowDownRightBold } from 'react-icons/pi'
import Link from 'next/link'


export default function UniqueStyles() {
    return (
        <div className="bg-[#FAF3E6] text-black mx-auto max-w-full">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2  items-center justify-center my-12 ">
                <div className="relative flex justify-end items-center lg:m-10 mx-4 lg:mx-0 group">
                    <Image
                        src={banner4}
                        alt="New Arrival"
                        width={400}
                        height={350}
                        priority
                        className=' rounded-lg cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-105'
                    />
                    <div className="absolute  mg:hidden left-[34%] top-2/4  h-72 w-40 overflow-hidden rounded-t-full rounded-b-full border-4 border-white">
                        <Image
                            src={banner23}
                            alt="New Arrival"
                            layout='fill'
                            objectFit='cover'
                            className="w-full h-auto cursor-pointer"
                            priority
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start p-6 h-full rounded-lg lg:mr-10  mx-4 lg:mx-0">
                    <h1 className="text-xl lg:text-5xl font-normal text-left lg:mt-14 gap-2 tracking-normal leading-10" style={{ fontFamily: "Mona Sans" }}>
                        Jewelry Unique Styles
                    </h1>
                    <p className='mt-2 lg:mt-10 text-[#938484] font-normal leading-6 text-sm tracking-wide' style={{ fontFamily: "Mona Sans" }}>
                        There are many variations of passages of Lorem Ipsum available, <br />
                        but majority have suffered alteration in some form, by injected humour, <br />
                        or randomised words which don&apos;t look even slightly believable.</p>
                    <div className="flex flex-row justify-center items-center mt-5 lg:mt-0">
                        <Link
                            href="/shop"
                            className="bg-[#A69076] hover:bg-[#8E7A62] text-white px-4 py-2 lg:px-8 lg:py-4 lg:mt-10 text-lg shadow-[0_-4px_6px_0_#A69076] border-t-2 border-white flex items-center"
                        >
                            <span className=" text-xs lg:text-sm">Shop Now</span>
                            <PiArrowDownRightBold className="ml-2 text-white" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
