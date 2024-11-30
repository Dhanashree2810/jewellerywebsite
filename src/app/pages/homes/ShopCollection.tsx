'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import pendant1 from '@/assets/images/pendant1.png';
import pendant2 from '@/assets/images/pendant2.png';
import pendant3 from '@/assets/images/pendant3.png';
import pendant7 from '@/assets/images/pendant7.png';
import pendant9 from '@/assets/images/pendant9.png';
import ring1 from '@/assets/images/ring1.png';
import ring3 from '@/assets/images/ring3.png';
import ring6 from '@/assets/images/ring6.png';
import ring7 from '@/assets/images/ring7.png';
import ring8 from '@/assets/images/ring8.png';
import bracelet from '@/assets/images/bracelet.jpg';
import bangles1 from '@/assets/images/bangles1.webp';
import earrings3 from '@/assets/images/earrings3.png';
import earrings4 from '@/assets/images/earrings4.webp';
import earrings5 from '@/assets/images/earrings5.webp';
import Link from "next/link";
import collection1 from '@/assets/images/collection1.png'
import collection2 from '@/assets/images/collection2.png'
import { BsArrowRight } from "react-icons/bs";
import { LiaArrowRightSolid } from "react-icons/lia";


const settings = {
  // arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
};

export default function ShopCollection() {
  const newarrivallist = [
    { id: 1, img: pendant1 },
    { id: 2, img: ring1 },
    { id: 2, img: bangles1 },
    { id: 3, img: pendant2 },
    { id: 4, img: ring3 },
    { id: 2, img: bracelet },
    { id: 5, img: pendant3 },
    { id: 6, img: ring6 },
    { id: 2, img: earrings3 },
    { id: 7, img: pendant7 },
    { id: 8, img: ring7 },
    { id: 2, img: earrings4 },
    { id: 9, img: pendant9 },
    { id: 10, img: pendant7 },
    { id: 2, img: earrings5 },
    { id: 11, img: ring8 },

  ];


  return (
    <div className="w-full md:px-4 md:py-5 sm:px-8 sm:py-10 lg:px-14 lg:py-5">
      <div className='grid grid-cols-1 justify-center items-center my-2'>
        <h1 className=" text-[#221F1A] font-medium text-center text-4xl my-2"> Sparkle In Love </h1>
      </div>

      <div className="w-full relative my-5">
        <Slider {...settings} className="text-white">
          {newarrivallist.map((slide) => (
            <div key={slide.id} className="h-full flex items-center justify-center">
              <div className="grid grid-cols-1 max-w-full lg:gap-5 items-center lg:items-start lg:flex-row justify-center px-1 lg:px-3 py-6 lg:py-3">
                <div className="flex flex-col overflow-hidden transform transition-transform duration-300 ease-in-out group">
                  <div className="group-hover:scale-95 transform transition-transform duration-300 ease-in-out bg-[#F5F5F5] rounded-lg">
                    <Image
                      src={slide.img}
                      width={800}
                      height={360}
                      className="w-full cursor-pointer rounded-sm h-auto transform transition-transform duration-300 ease-in-out group-hover:scale-125"
                      alt="Image not found"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* <div className="grid grid-cols-2 lg:grid-cols-6 max-w-full gap-2 lg:gap-5 items-center lg:items-start lg:flex-row justify-center px-1 lg:px-3 py-6 lg:py-3">
          <div className=" flex flex-row justify-start items-center gap-3 text-sm lg:text-lg">
            <h1 className="font-semibold">Neckalces</h1>
          </div>
 
          <div className=" flex flex-row justify-start items-center gap-3  text-sm lg:text-lg">
            <h1 className=" flex flex-row justify-start items-center gap-3">Explore  <LiaArrowRightSolid />
              <span className=" font-semibold">Earrings</span>
            </h1>
          </div>
          <div className=" flex flex-row justify-start items-center gap-3  text-sm lg:text-lg">
            <h1 className=" flex flex-row justify-start items-center gap-3">Explore  <LiaArrowRightSolid />
              <span className=" font-semibold">Bracelets</span>
            </h1>
          </div>

          <div className=" flex flex-row justify-start items-center gap-3  text-sm lg:text-lg">
            <h1 className=" flex flex-row justify-start items-center gap-3">Explore  <LiaArrowRightSolid />
              <span className=" font-semibold">Rings</span>
            </h1>
          </div>

          <div className=" flex flex-row justify-start items-center gap-3  text-sm lg:text-lg">
            <h1 className=" flex flex-row justify-start items-center gap-3">Explore  <LiaArrowRightSolid />
              <span className=" font-semibold">Pendants</span>
            </h1>
          </div>

          <div className=" flex flex-row justify-start items-start  lg:justify-end lg:items-end gap-3  text-sm lg:text-lg">
            <h1 className=" flex flex-row justify-start items-center gap-3">Explore  <LiaArrowRightSolid />
            </h1>
          </div>
        </div> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-14 px-1 lg:px-3 items-center justify-center mt-8 lg:my-10">
        <div className=' flex flex-row justify-between rounded-md items-center bg-[#F5F5F5] mx-2 lg:mx-0'>
          <div className=" flex flex-col justify-start px-10 lg:px-14 py-5 lg:py-14">
            <h4 className="text-3xl font-normal text-black mb-3">Luxe Abundance</h4>
            <p>Get 20%  off with our code : LUXE20</p>
            <Link href="/shop" className="text-[#967F50] flex flex-row justify-start font-bold items-center gap-4 mt-8">
              View Full Collection
              <BsArrowRight size={30} className=" text-[#967F50]" />
            </Link>
          </div>
          <div className=" flex justify-end items-end">
            <Image src={collection2} height={200} width={200} className="" alt="Luxe Abundance" />
          </div>
        </div>

        <div className=' flex flex-row justify-between rounded-md items-center bg-[#F5F5F5] mx-2 lg:mx-0'>
          <div className=" flex flex-col justify-start px-10 lg:px-14 py-14">
            <h4 className="text-3xl font-normal text-black mb-3">Sparkle In Love</h4>
            <p>Get 20%  off with our code : LUXE20</p>
            <Link href="/shop" className="text-[#967F50] flex flex-row justify-start font-bold items-center gap-4 mt-8">
              View Full Collection
              <BsArrowRight size={30} className=" text-[#967F50]" />
            </Link>
          </div>
          <div className=" flex justify-end items-end">
            <Image src={collection1} height={200} width={200} className="" alt="Sparkle In Love" />
          </div>
        </div>
      </div>
    </div>
  )
}
