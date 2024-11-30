import { Button } from "@/components/ui/button";
import Image from "next/image";
import banner1 from "@/assets/images/banner21.jpg";
import banner2 from "@/assets/images/pendant4.jpg";
import pendantimg from "@/assets/images/earrings1.jpg";
import { PiArrowDownRightBold } from "react-icons/pi";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-[#FAF3E6] text-black max-w-full">
      <main className="container mx-auto px-4 py-5 lg:px-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center justify-center">
          <div className="flex flex-col justify-end items-stretch space-y-8 lg:ml-16">
            <h1 className=" text-4xl lg:text-6xl font-serif leading-10 tracking-normal lg:tracking-wide">
              <div>Experience the</div>
              <div className="flex items-center space-x-28">
                <div>Brilliance of</div>
                <div className="overflow-hidden border-2 border-white rounded-full">
                  <Image
                    alt="Pendant"
                    height={60}
                    width={100}
                    src={pendantimg}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div>Craftsmanship</div>
            </h1>

            <p className="text-sm text-muted-foreground text-[#967F50] leading-8">
              Discover a world where beauty meets craftsmanship, where <br />
              every piece of jewelry tells a story.
            </p>

            <div className="flex flex-row items-center justify-between gap-8">
              <div className="flex flex-row justify-center items-center mt-5 lg:mt-0">
                <Link
                  href="/shop"
                  className="bg-[#A69076] hover:bg-[#8E7A62] text-white px-4 py-2 lg:px-8 lg:py-4 lg:mt-10 text-lg shadow-[0_-4px_6px_0_#A69076] border-t-2 border-white flex items-center"
                >
                  <span className=" text-xs lg:text-sm">Shop Now</span>
                  <PiArrowDownRightBold className="ml-2 text-white" />
                </Link>
              </div>

              <div className="relative w-24 h-24 lg:mr-16">
                <div className="absolute inset-0 flex items-center justify-end">
                  <div className="w-20 h-20 rounded-full border-2 p-1 border-dashed border-[#967F50] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs">100%</div>
                      <div className="text-xs">Original</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-10">
            <div className="overflow-hidden rounded-t-full border-4 border-[#A69076] w-[300px] h-[380px]">
              <Image
                src={banner1}
                alt="Jewelry model"
                height={300}
                width={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="overflow-hidden rounded-b-full border-4 border-[#A69076] w-[300px] h-[380px]">
              <Image
                src={banner2}
                alt="Ring presentation"
                height={300}
                width={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
