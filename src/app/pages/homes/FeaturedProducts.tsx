"use client"
import React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { FiArrowRightCircle } from "react-icons/fi";
import banner7 from "@/assets/images/banner7.png"
import pendant1 from "@/assets/images/pendant1.png"
import pendant2 from "@/assets/images/pendant2.png"
import pendant3 from "@/assets/images/pendant3.png"
import pendant6 from "@/assets/images/pendant6.png"
import ring3 from "@/assets/images/ring3.png"
import ring2 from "@/assets/images/ring6.png"
import ring7 from "@/assets/images/ring7.png"
import ring8 from "@/assets/images/ring8.png"
import pendant4 from "@/assets/images/pendant68.png"
import ring9 from "@/assets/images/ring9.png"
import pendant5 from "@/assets/images/pendant9.png"
import bracelet from "@/assets/images/bracelet.jpg"
import banner8 from '@/assets/images/banner8.png'
import { PiArrowDownRightBold } from "react-icons/pi";
import Link from "next/link"


const products = [
  {
    id: 1,
    title: "Copper Gold plated",
    price: "₹105.00",
    oldPrice: "₹115.00",
    // discount: "-50%",
    image: pendant1,
  },
  {
    id: 2,
    title: "Zircon Gold Plated Ring",
    price: "₹80.75",
    oldPrice: "₹90.54",
    image: ring3,
  },
  {
    id: 3,
    title: "Diamond Chain",
    price: "₹90.00",
    oldPrice: "₹100.00",
    image: pendant2,
  },
  {
    id: 4,
    title: "Diamond Ring",
    price: "₹75.00",
    oldPrice: "₹80.02",
    image: ring2,
  },
  {
    id: 5,
    title: "Copper Gold plated",
    price: "₹105.00",
    oldPrice: "₹115.00",
    // discount: "-50%",
    image: pendant3,
  },
  {
    id: 6,
    title: "Chain Necklace Gold",
    price: "₹90.00",
    oldPrice: "₹100.00",
    image: pendant6,
  },
  {
    id: 7,
    title: "Diamond Ring",
    price: "₹875.00",
    oldPrice: "₹780.02",
    image: ring7,
  },
  {
    id: 8,
    title: "Diamond Chain",
    price: "₹105.00",
    oldPrice: "₹115.00",
    // discount: "-50%",
    image: pendant4,
  },
  {
    id: 9,
    title: "Diamond Ring",
    price: "₹75.00",
    oldPrice: "₹80.02",
    image: ring8,

  },
  {
    id: 10,
    title: "Chain Necklace Diamond",
    price: "₹75.00",
    oldPrice: "₹80.02",
    image: pendant5,
  },
  {
    id: 11,
    title: "Diamond Ring",
    price: "₹90.00",
    oldPrice: "₹100.00",
    image: ring9,

  },
  {
    id: 12,
    title: "Diamond Bracelet",
    price: "₹75.00",
    oldPrice: "₹80.02",
    image: bracelet,
  },
]

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 4 : prevIndex - 4
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= products.length ? 0 : prevIndex + 4
    )
  }

  return (
    <div className="w-full md:px-4 md:py-5 sm:px-8 sm:py-10 lg:px-20 lg:py-5 my-10 lg:my-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mx-4 lg:mx-0">
        <div className="grid grid-cols-1 justify-center lg:justify-between">
          <div className="flex flex-col justify-start mb-6 lg:mb-2">
            <h2 className="text-4xl font-normal text-center md:text-left">
              Featured Products
            </h2>
          </div>

          <div className="flex flex-col justify-start items-start lg:items-start">
            <Image
              src={banner7}
              alt="Featured product"
              width={670}
              height={300}
              className="rounded-lg w-full lg:w-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:gap-2 mx-4 lg:mx-0">
          <div className=" flex flex-row justify-end">
            <Button
              variant="ghost"
              onClick={handlePrev}
              className="rounded-full bg-white border-2 p-2 border-[#A69076] mr-5"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="ghost"
              onClick={handleNext}
              className="rounded-full bg-white border-2 p-2 border-[#A69076]"
            >
              <ChevronRight />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
            {products.slice(currentIndex, currentIndex + 2).map((product) => (
              <Card
                key={product.id}
                className="flex flex-col h-auto lg:h-[380px] rounded-lg overflow-hidden shadow"
              >
                <CardHeader className="flex-grow flex items-center justify-center bg-[#F5F5F5] group">
                  <Image
                    src={product.image}
                    alt={product.title}
                    height={300}
                    width={200}
                    className="rounded-lg object-cover cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </CardHeader>
                <CardContent className="flex flex-col justify-end p-4 bg-white border-t border-[#F5F5F5]">
                  <CardTitle className="text-[15px] font-semibold text-[#655f5f]">
                    {product.title}
                  </CardTitle>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <span className="text-sm font-bold">{product.price}</span>
                      <span className="text-sm line-through text-gray-500 ml-2">
                        {product.oldPrice}
                      </span>
                    </div>
                    <FiArrowRightCircle size={24} className="text-[#A69076]" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 lg:mt-9">
            {products.slice(currentIndex + 2, currentIndex + 4).map((product) => (
              <Card
                key={product.id}
                className="flex flex-col h-auto lg:h-[380px] rounded-lg overflow-hidden shadow"
              >
                <CardHeader className="flex-grow flex items-center justify-center bg-[#F5F5F5] group">
                  <Image
                    src={product.image}
                    alt={product.title}
                    height={300}
                    width={200}
                    className="rounded-lg object-cover cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </CardHeader>
                <CardContent className="flex flex-col justify-end p-4 bg-white border-t border-[#F5F5F5]">
                  <CardTitle className="text-[15px] font-semibold text-[#655f5f]">
                    {product.title}
                  </CardTitle>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <span className="text-sm font-bold">{product.price}</span>
                      <span className="text-sm line-through text-gray-500 ml-2">
                        {product.oldPrice}
                      </span>
                    </div>
                    <FiArrowRightCircle size={24} className="text-[#A69076]" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5 items-center justify-center my-8 lg:my-12 mx-2 lg:mx-0 ">
        <div className="flex flex-col justify-center items-center lg:justify-center lg:items-start bg-[#F5F5F5] p-6 h-full rounded-lg pl-0 lg:pl-28 mx-4 lg:mx-0">
          <h2 className="text-center lg:text-left text-xs lg:text-sm font-normal bg-white p-3 rounded-l-full rounded-r-full">Get 25% off this week</h2>
          <h1 className="text-xl lg:text-4xl font-semibold text-left mt-0 lg:mt-20 gap-2 tracking-wide leading-normal lg:leading-[50px]">
            Unleash Your
            <br />
            Cravings, Not Your
            <br />
            Wallet!
          </h1>
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

        <div className="flex justify-center items-center mx-4 lg:mx-0">
          <Image
            src={banner8}
            alt="New Arrival"
            width={300}
            height={300}
            objectFit="cover"
            className="rounded-lg w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  )
}
