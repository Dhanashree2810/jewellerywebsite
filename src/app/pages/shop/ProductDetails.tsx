'use client';
import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import detailimg1 from '@/assets/images/2-1.jpg'
import detailimg2 from '@/assets/images/productdet1.jpg'
import detailimg3 from '@/assets/images/productdet2.jpg'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import related1 from '@/assets/images/2-2.jpg'
import related2 from '@/assets/images/2-3.jpg'
import related3 from '@/assets/images/2-4.jpg'
import related4 from '@/assets/images/2-5.jpg'
import { CiHeart } from 'react-icons/ci';
import { Minus, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { FaEye, FaLinkedin, FaStar, FaTwitter, FaWhatsapp } from 'react-icons/fa6';
import { FiFacebook } from 'react-icons/fi';
import { ImPinterest2 } from 'react-icons/im';
import { LuBadgeCheck } from "react-icons/lu";
import { LuRotateCcw } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { BsBox } from "react-icons/bs";
import RatingsAndReviews from './RatingsAndReviews';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

type Review = {
    user: string;
    email: string;
    rating: number;
    date: string;
    reviewText: string;
};

interface Product {
    id: number;
    name: string;
    img: StaticImageData;
    category: string;
    quantity: number;
    price: number;
    description?: string;
}

interface Props {
    recommended: Product[];
}

const ProductDetails = ({ productid }: any) => {
    const [selectedImage, setSelectedImage] = useState<StaticImageData>(detailimg1);
    const [zoom, setZoom] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [quantities, setQuantities] = useState<Record<string, number>>({});
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [selectedProdQty, setselectedProdQty] = useState<Record<string, number>>({});

    const [reviews, setReviews] = useState([
        {
            user: 'Ananya Sharma',
            email: 'ananyasharma12@gmail.com',
            rating: 4.5,
            date: 'October 10, 2024',
            reviewText: 'The sling bag is great! It fits all my essentials, and the material feels premium.',
        },
        {
            user: 'Pooja Singh',
            email: 'poojasingh12@gmail.com',
            rating: 4,
            date: 'October 5, 2024',
            reviewText: 'The color is nice, but it’s a little smaller than I expected.',
        },
    ]);

    const averageRating = 4.2;
    const totalRatings = 1257;
    const totalReviews = 36;

    const handleSubmitReview = (newReview: Review) => {
        setReviews((prevReviews) => [...prevReviews, newReview]);
    };

    const product = {
        id: productid,
        category: 'Necklaces',
        name: '9ct White Gold 0.05cttw Diamond Circle Necklace',
        desc: "The necklace is crafted in 9K rose gold and features a band set with 0.05 CTW brilliant diamonds and a centerpiece of bright pink topaz on a diamond bezel frame.",
        price: 6950,
        sku: 'H3E4F5G6',
        ratings: 3.50,
        quantity: 1,
        terms: [
            { title: 'Price match promise', icon: <LuBadgeCheck /> },
            { title: 'Free delivery on all orders', icon: <BsBox /> },
            { title: 'Safe & secure transaction', icon: <IoLockClosedOutline /> },
            { title: 'Extended Christmas return policy', icon: <LuRotateCcw /> }
        ],
        images: [detailimg1, detailimg2, detailimg3],
        recommended: [
            { id: 1, name: '9ct White Gold 0.25ct Diamond Oval Cluster Pendant', img: related1, price: 2500.00, category: "Necklaces", quantity: 1, description: "A dazzling diamond oval cluster pendant crafted in 9ct white gold." },
            { id: 2, name: '9ct White Gold 0.40cttw Round Halo Pendant', img: related2, price: 2500.00, category: "Necklaces", quantity: 1, description: "A dazzling diamond oval cluster pendant crafted in 9ct white gold." },
            { id: 3, name: '9ct White Gold Blue Topaz Teardrop Pendant', img: related3, price: 12500.00, category: "Necklaces", quantity: 1, description: "A dazzling diamond oval cluster pendant crafted in 9ct white gold." },
            { id: 4, name: '18ct Yellow Gold 0.10cttw Diamond & Baroque Pearl Pendant', img: related4, price: 8050.00, category: "Necklaces", quantity: 1, description: "A dazzling diamond oval cluster pendant crafted in 9ct white gold." },
        ],
    };

    useEffect(() => {
        if (product.images && product.images.length > 0) {
            setSelectedImage(product.images[0]);
        }
        setQuantities({ [product.id]: product.quantity });
    }, []);

    const handleMouseEnter = () => {
        setZoom(true);
    };

    const handleMouseLeave = () => {
        setZoom(false);
    };

    const handleMouseMove = (e: any) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { width, height } = target;

        setCursorPosition({
            x: offsetX / width * 100,
            y: offsetY / height * 100,
        });
    };

    const handleIncrement = (id: string) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: prev![id] + 1,
        }));
    };

    const handleDecrement = (id: string) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max(prev![id] - 1, 1),
        }));
    };

    const handleSelectedItem = (item: any) => {
        console.log("item", item);

        setSelectedProduct(item);
        setselectedProdQty({ [item.id]: item.quantity });
    }

    const handleSelectedItemIncrement = (id: string) => {
        setselectedProdQty((prev) => ({
            ...prev,
            [id]: prev![id] + 1,
        }));
    };

    const handleSelectedItemDecrement = (id: string) => {
        setselectedProdQty((prev) => ({
            ...prev,
            [id]: Math.max(prev![id] - 1, 1),
        }));
    };

    return (
        <div className="relative w-full">
            <div className="w-full px-4 py-5 sm:px-8 sm:py-10 lg:px-48 lg:py-5 bg-[#FAF7F5]">
                <div className='bg-white'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-10 p-10">
                        <div className="relative flex flex-col justify-start items-start">
                            <div className="relative">
                                <div
                                    className="w-[200px] h-[200px] lg:w-[500px] lg:h-[400px] relative overflow-hidden"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                >
                                    <Image
                                        src={selectedImage}
                                        alt="Selected product image"
                                        layout="fill"
                                        objectFit="cover"
                                        className={`cursor-pointer transition-transform duration-300 ${zoom ? "transform scale-125" : "transform scale-100"}`}
                                        style={{
                                            transformOrigin: `${cursorPosition.x}% ${cursorPosition.y}%`,
                                            transition: "transform 0.3s ease",
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 lg:gap-4 mt-4">
                                {product.images.map((img, index) => (
                                    <Image
                                        key={index}
                                        src={img}
                                        width={70}
                                        height={70}
                                        alt={`Thumbnail ${index}`}
                                        onClick={() => setSelectedImage(img)}
                                        className={`w-16 h-16 rounded-lg cursor-pointer ${img === selectedImage ? 'border-2 border-blue-500' : 'border'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col mb-4 ga-2">
                                <div className="mb-3">
                                    <h1 className="text-sm font-normal text-gray-600 py-2">{product.category}</h1>
                                    <h1 className="text-lg lg:text-xl font-normal">{product.name}</h1>
                                    <div className=' flex flex-row items-center gap-4'>
                                        <FaStar size={15}/>
                                        <h2 className=' text-sm font-semibold'>{product.ratings}</h2>
                                        <h2 className='font-normal text-sm py-2 text-gray-400'> SKU:  <span className=' font-semibold text-black'>{product.sku}</span></h2>
                                    </div>
                                </div>
                                <div className=' flex flex-col justify-start items-start mb-3'>
                                    <h1 className="text-black font-semibold text-xl lg:text-3xl">
                                        ₹{product.price.toFixed(2)} <span className=' text-sm font-normal'> + Free Shipping</span>
                                    </h1>

                                </div>
                                <div>
                                    <p className=' text-xs lg:text-sm'>{product.desc}</p>
                                </div>

                                <div className="flex flex-row gap-4 my-4">
                                    <Button
                                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        onClick={() => handleDecrement(product.id)}
                                        disabled={quantities[product.id] <= 1}
                                        aria-label="Decrease quantity"
                                    >
                                        <Minus className="text-gray-600" />
                                    </Button>
                                    <Input
                                        type="number"
                                        value={quantities[product.id]}
                                        readOnly
                                        className="w-16 text-center border border-gray-300 rounded-md"
                                        aria-label="Quantity"
                                    />
                                    <Button
                                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                                        onClick={() => handleIncrement(product.id)}
                                        aria-label="Increase quantity"
                                    >
                                        <Plus className="text-gray-600" />
                                    </Button>
                                    <Link href="/carts">
                                        <Button className="bg-black text-white h-10 w-30 lg:w-60 rounded-xl hover:bg-white hover:text-black">
                                            Add to Cart
                                        </Button>
                                    </Link>
                                </div>

                                <div>
                                    <Link href="/wishlist">
                                        <div className="flex flex-row items-center gap-2 text-sm lg:text-[16px] font-semibold">
                                            <CiHeart size={30} /> Add to wishlist
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-gray-900 font-semibold"></h3>
                                <ul className="list-disc pl-5 text-gray-700 text-sm font-normal leading-8 ">
                                    {product.terms.map((offer, index) => (
                                        <li key={index} className=' flex gap-2 items-center'>
                                            {offer.icon}
                                            {offer.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className=" flex flex-row items-center">
                                <div className=" flex text-sm">Share this product:</div>
                                <div className=" flex  gap-2 mt-2 lg:mt-0">
                                    <FiFacebook className="rounded-full p-2 text-black bg-transparent hover:bg-black hover:text-white hover:cursor-pointer" size={35} />
                                    <FaTwitter className="rounded-full p-2 text-black bg-transparent hover:bg-black hover:text-white hover:cursor-pointer" size={35} />
                                    <ImPinterest2 className="rounded-full p-2 text-black bg-transparent hover:bg-black hover:text-white hover:cursor-pointer" size={35} />
                                    <FaLinkedin className="rounded-full p-2 text-black bg-transparent hover:bg-black hover:text-white hover:cursor-pointer" size={35} />
                                    <FaWhatsapp className="rounded-full p-2 text-black bg-transparent hover:bg-black hover:text-white hover:cursor-pointer" size={35} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto p-4">
                        <RatingsAndReviews
                            averageRating={averageRating}
                            totalRatings={totalRatings}
                            totalReviews={totalReviews}
                            reviews={reviews}
                            onSubmitReview={handleSubmitReview}
                        />

                    </div>

                    <div className="mt-8">
                        <h2 className="text-lg font-semibold mb-4 p-4 underline">Recommended for You</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-8">
                            {product.recommended.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="group relative flex flex-col h-full p-5 bg-white rounded-lg shadow-lg"
                                >
                                    <div className="relative w-full h-48 flex justify-center items-center overflow-hidden rounded-lg">
                                        <Image
                                            src={item.img}
                                            alt={`Recommended Product ${index + 1}`}
                                            layout="fill"
                                            objectFit="contain"
                                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
                                        />

                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button
                                                className="bg-white rounded-full p-2 shadow-md hover:bg-white"
                                                aria-label="Add to Wishlist"
                                            >
                                                <FaHeart size={20} className="text-gray-500" />
                                            </Button>
                                            <Button
                                                className="bg-white rounded-full p-2 shadow-md hover:bg-white"
                                                aria-label="Add to Cart"
                                            >
                                                <FaShoppingCart size={20} className="text-gray-500" />
                                            </Button>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        className="bg-white rounded-full p-2 shadow-md  hover:bg-white"
                                                        aria-label="Quick View"
                                                        onClick={() => handleSelectedItem(item)}
                                                    >
                                                        <FaEye size={20} className="text-gray-500" />
                                                    </Button>
                                                </PopoverTrigger>
                                                {selectedProduct && (
                                                    <PopoverContent className="w-full h-auto max-w-[800px] flex-1 justify-center items-center ">
                                                        <div className="relative bg-white rounded-lg p-6 flex">
                                                            <Button
                                                                className="absolute top-4 right-4 bg-gray-200 rounded-full p-2"
                                                                onClick={() => setSelectedProduct(null)}
                                                            >
                                                                <RxCross2 size={30} className='text-black' />
                                                            </Button>

                                                            <div className="flex-shrink-0 w-1/3 h-full flex items-center justify-center">
                                                                <Image
                                                                    src={selectedProduct.img}
                                                                    alt={selectedProduct.name}
                                                                    className="rounded-lg object-contain w-full h-full max-h-80"
                                                                />
                                                            </div>

                                                            <div className="ml-6 flex-1 flex flex-col">
                                                                <p className="text-sm text-gray-400">{selectedProduct.category}</p>
                                                                <h2 className="text-lg font-semibold mb-2">{selectedProduct.name}</h2>
                                                                <p className="text-lg font-bold my-2">₹{selectedProduct.price.toFixed(2)} + Free Shipping</p>
                                                                <p className="text-sm text-gray-600">{selectedProduct.description}</p>

                                                                <div className="mt-6 flex flex-col space-y-4">
                                                                    <div className="flex flex-row items-center  gap-3 rounded px-2">
                                                                        <Button
                                                                            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                                                            onClick={() => handleSelectedItemDecrement(String(selectedProduct.id))}
                                                                            disabled={selectedProdQty[selectedProduct.id] <= 1}
                                                                            aria-label="Decrease quantity"
                                                                        >
                                                                            <Minus className="text-gray-600" />
                                                                        </Button>
                                                                        <Input
                                                                            type="number"
                                                                            value={selectedProdQty[selectedProduct.id]}
                                                                            readOnly
                                                                            className="w-16 text-center border border-gray-300 rounded-md"
                                                                            aria-label="Quantity"
                                                                        />
                                                                        <Button
                                                                            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                                                                            onClick={() => handleSelectedItemIncrement(String(selectedProduct.id))}
                                                                            aria-label="Increase quantity"
                                                                        >
                                                                            <Plus className="text-gray-600" />
                                                                        </Button>

                                                                        <Link href="/carts">
                                                                            <Button className="bg-black text-white h-10 w-full rounded-xl hover:bg-white hover:text-black">
                                                                                Add to Cart
                                                                            </Button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </PopoverContent>
                                                )}
                                            </Popover>
                                        </div>
                                    </div>

                                    <div className="my-2 flex flex-col justify-between flex-grow">
                                        <h3 className="mt-2 text-sm font-normal text-gray-400">
                                            {item.category}
                                        </h3>
                                        <h3 className="mt-2 text-[16px] font-semibold">{item.name}</h3>
                                        <p className="flex flex-row justify-start items-center gap-2 mt-3">
                                            <span className="text-[16px] text-gray-600 font-semibold">
                                                ₹{item.price.toFixed(2)}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
