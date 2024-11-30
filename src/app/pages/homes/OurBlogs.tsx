import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { GoArrowRight } from "react-icons/go";
import blogs1 from '@/assets/images/blogs1.png';
import blogs2 from '@/assets/images/blogs2.png';
import blogs3 from '@/assets/images/blogs3.png';
import Link from 'next/link';

export default function OurBlogs() {
  const productlist = [
    { id: 1, img: blogs1, title: 'Lavish Perfection', date: 'January 10,2024', desc: 'Behind the scenes crafting Lavish perfection.' },
    { id: 2, img: blogs2, title: 'Craftsmanship', date: 'January 10,2024', desc: 'Every piece tells a story of craftsmanship that transcends trends.' },
    { id: 3, img: blogs3, title: 'Lifestyle Luxe', date: 'January 10,2024', desc: 'Where we explore the Lavish lifestyle beyond jewelry.' },
  ];

  return (
    <div className="w-full md:px-4 md:py-5 sm:px-8 sm:py-10 lg:px-20 lg:py-5 my-10 lg:my-0">
      <div className="grid grid-cols-1 justify-center items-center">
        <div className="flex flex-col my-5">
          <h2 className=' text-center text-sm text-gray-500'>Our Blogs</h2>
          <h1 className=" font-normal text-center text-4xl lg:text-4xl my-4">Articles & Resources</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8">
        {productlist.map((a) => (
          <div key={a.id} className="relative group">
            <Card className="border-none shadow-none p-0 rounded-none h-full flex flex-col  mx-4 lg:mx-0">
              <CardContent className="p-0 flex flex-col h-full group">
                <Image
                  src={a.img}
                  width={650}
                  height={550}
                  className="w-full h-auto cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                  alt="Product"
                />
                <div className="flex flex-col gap-2 m-2 flex-grow">
                  <div className="flex flex-row justify-start items-start text-sm font-bold leading-7 space-x-2 lg:mt-5">
                    <h1 className="font-normal text-sm text-gray-600">{a.title}</h1>
                    <span className="text-gray-600 font-normal text-sm"> · {a.date}</span>
                  </div>
                  <span className="text-[16px] font-semibold">{a.desc}</span>
                </div>
                <div className="mt-auto m-2">
                  <Link href="/product" className="flex flex-row items-center gap-2 font-medium text-[#A69076]">
                    Read More
                    <GoArrowRight size={30} />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
