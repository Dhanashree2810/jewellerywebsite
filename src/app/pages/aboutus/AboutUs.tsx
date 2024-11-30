import Image from 'next/image';
import about1 from '@/assets/images/img-003.png';
import backgroundImage from '@/assets/images/bg-03.jpg';
import bg5 from '@/assets/images/bg-005.jpg';
import bg6 from '@/assets/images/bg-006.jpg';
import bg7 from '@/assets/images/bg-007.jpg';
import backgroundImage2 from '@/assets/images/bg-08.jpg';
import bg04 from '@/assets/images/bg-04.jpg';
import saleicon from '@/assets/images/sale-icon.png'
import Link from 'next/link';

export default function AboutUs() {
    const newarrivallist = [
        {
            id: 1,
            img: bg5,
            title: "14k Solid Gold",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        },
        {
            id: 2,
            img: bg6,
            title: "Sterling Silver",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        },
        {
            id: 3,
            img: bg7,
            title: "Gold Vermeil",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center space-y-10">
            <header className=" shadow w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">About Us</h1>
                </div>
            </header>

            <div className="flex flex-col items-center text-center space-y-4 px-4 lg:px-40">
                <div className="relative w-[160px] h-[160px] lg:h-[200px] lg:w-[200px]">
                    <Image
                        src={about1}
                        alt="About Image"
                        layout="fill"
                        objectFit="contain"
                        className="w-full h-auto"
                    />
                </div>
                <h1 className="text-xl lg:text-3xl font-medium leading-8 lg:leading-[50px] tracking-wide">
                    We make high-quality, handcrafted <br />
                    jewelry for over a decade, having the same <br />
                    passion & values!
                </h1>
                <p className="max-w-xl leading-7 text-xs lg:text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore. Et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur lorem ipsum.
                </p>
            </div>


            <div className="relative w-full  bg-cover bg-center">
                <div
                    className="mx-auto max-w-[1450px] h-[300px] lg:h-[630px] bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: `url(${backgroundImage.src})`,
                    }}
                ></div>
            </div>


            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 lg:mx-10 items-center">
                <div className="flex flex-col justify-center items-start text-left p-6 lg:p-10 lg:ml-32 h-full rounded-lg">
                    <h1 className="text-xl lg:text-4xl font-normal gap-2 tracking-wide leading-8 lg:leading-[50px]">
                        Constantly creating new <br /> collections and lorem <br /> ipsum sit
                    </h1>
                    <h2 className="mt-4 lg:mt-10 text-sm lg:text-lg font-medium">
                        FAIR PRICING
                    </h2>
                    <p className="mt-2 font-normal leading-6 text-xs lg:text-base tracking-wide">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>

                <div className="relative flex justify-start items-start mx-4 lg:mx-0 group w-full h-[200px] lg:h-[620px]">
                    <Image
                        src={bg04}
                        alt="New Arrival"
                        layout="fill"
                        objectFit="cover"
                        priority
                        className="rounded-lg cursor-pointer"
                    />
                </div>
            </div>

            <div className=' w-full mx-auto px-4 lg:px-48 '>
                <div className="px-4 sm:px-6 lg:px-8 py-6 text-center">
                    <h1 className="text-4xl font-medium text-gray-900">Precious Metals</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  px-4">
                    {newarrivallist.map((slide) => (
                        <div
                            key={slide.id}
                            className="flex flex-col items-center text-center space-y-2 group overflow-hidden"
                        >
                            <div className="relative w-full h-[200px] lg:h-[500px] overflow-hidden rounded-sm">
                                <Image
                                    src={slide.img}
                                    layout="responsive"
                                    width={300}
                                    height={400}
                                    alt={slide.title}
                                    className="transform transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className=' flex flex-col p-4'>
                                <h2 className="txt-lg lg:text-xl font-semibold pb-3">{slide.title}</h2>
                                <p className="text-sm">{slide.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative w-full bg-cover bg-center">
                <div
                    className="relative mx-auto max-w-[1450px] min-h-[600px] bg-cover bg-center text-white flex items-center"
                    style={{ backgroundImage: `url(${backgroundImage2.src})` }}
                >
                    <div className="absolute inset-0 bg-[#a3a19d] bg-opacity-45"></div>

                    <div className="relative flex flex-col justify-start items-start p-8 max-w-4xl text-left space-y-6 z-10 lg:ml-20">
                        <h1 className="text-xl lg:text-4xl font-medium pb-2 leading-5 lg:leading-[50px]">
                            We work with expert jewelers <br /> all around the world in order to <br />
                            create the most sophisticated <br /> pieces of lipsum
                        </h1>

                        <div className="w-full border-t-2 border-white"></div>
                        <p className="text-sm leading-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br />
                            do eiusmod tempor incididunt ut labore et dolore magna <br />
                            aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg space-y-4 py-5 lg:py-20">
                <div className="flex items-center">
                    <Image
                        src={saleicon}
                        alt="Sale Icon"
                        width={68}
                        height={69}
                        className="rounded-full"
                    />
                </div>

                <div className="text-center">
                    <h2 className="text-lg lg:text-5xl font-semibold text-gray-800 py-5 lg:py-7 italic">
                        25% Discount on Making Charges
                    </h2>
                    <p className="text-[16px] text-gray-600 my-5">
                        Lorem ipsum dolor sit amet, consectetur<br />adipisicing elit, sed do.
                    </p>
                </div>

                <div>
                    <Link
                        href="/shop"
                        className="px-4 py-2 bg-transparent text-black text-[16px] font-medium transition uppercase border border-black"
                    >
                       - visit our stores
                    </Link>
                </div>
            </div>
        </div>
    );
}
