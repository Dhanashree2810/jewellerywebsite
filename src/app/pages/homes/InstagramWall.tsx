import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import instawall1 from '@/assets/images/instawall1.png';
import instawall2 from '@/assets/images/instawall2.png';
import instawall3 from '@/assets/images/instawall3.png';
import instawall4 from '@/assets/images/instawall4.png';
import instawall5 from '@/assets/images/instawall5.png';
import instawall6 from '@/assets/images/instawall6.png';

export default function InstagramWall() {
  const productList = [
    { id: 1, img: instawall1 },
    { id: 2, img: instawall2 },
    { id: 3, img: instawall3 },
    { id: 4, img: instawall4 },
    { id: 5, img: instawall5 },
    { id: 6, img: instawall6 },
  ];

  return (
    <div className="w-full my-10 lg:my-0 px-4 py-5 sm:px-8 sm:py-10 lg:px-20 lg:py-5">
      <div className="grid grid-cols-1 justify-center items-center">
        <div className="flex flex-col my-5 text-center">
          <h1 className="font-[500px] text-2xl lg:text-4xl my-4">
            Instagram Wall
          </h1>
          <h2 className="text-sm text-gray-500">
            Follow us on Instagram and be part of the <br /> Lavish story
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {productList.map(({ id, img }, index) => (
          <div
            key={id}
            className={`relative group ${index === 4 ? '-mt-0 lg:-mt-[138px]' : ''}`}
          >
            <Card className="border-none shadow-none p-0 rounded-none">
              <CardContent className="p-0">
                <div className='group'>
                  <Image
                    src={img}
                    width={650}
                    height={550}
                    className="w-full h-auto rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                    alt={`Instagram image ${id}`}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
