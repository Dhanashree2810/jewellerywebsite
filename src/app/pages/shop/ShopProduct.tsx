'use client'
import { useState } from 'react'
import Link from 'next/link'
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Button } from '@/components/ui/button'
import { IoStar } from "react-icons/io5";
import Image, { StaticImageData } from "next/image";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { FiFilter } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { FaHeart } from 'react-icons/fa6'
import necklace1 from '@/assets/images/2-1.jpg'
import necklace2 from '@/assets/images/2-2.jpg'
import necklace3 from '@/assets/images/2-3.jpg'
import necklace4 from '@/assets/images/2-4.jpg'
import necklace5 from '@/assets/images/2-5.jpg'
import ring1 from '@/assets/images/4-1.jpg'
import ring2 from '@/assets/images/4-2.jpg'
import ring3 from '@/assets/images/4-3.jpg'
import ring4 from '@/assets/images/4-4.jpg'
import ring5 from '@/assets/images/4-5.jpg'
import bracelet1 from '@/assets/images/3-1.jpg'
import bracelet2 from '@/assets/images/3-2.jpg'
import bracelet3 from '@/assets/images/3-3.jpg'
import bracelet4 from '@/assets/images/3-4.jpg'
import bracelet5 from '@/assets/images/3-5.jpg'
import earrings1 from '@/assets/images/1-1.jpg'
import earrings2 from '@/assets/images/1-2.jpg'
import earrings3 from '@/assets/images/1-3.jpg'
import earrings4 from '@/assets/images/1-4.jpg'
import earrings5 from '@/assets/images/1-5.jpg'


type Product = {
    id: number;
    name: string;
    category: string;
    price: string;
    imageUrl: StaticImageData;
    ratings: string;
    reviews: string;
    brand: string;
    status: string;
    material: string;
    gemstones: string;
};

const products: Product[] = [
    { id: 1, name: 'Diamond Necklace', category: 'Necklace', price: '₹6950', imageUrl: necklace1, ratings: '4.33', reviews: '3', brand: 'GoldCo', status: 'Available', material: 'Gold', gemstones: 'None' },
    { id: 2, name: 'Diamond Ring', category: 'Ring', price: '₹7000', imageUrl: ring1, ratings: '3.50', reviews: '3', brand: 'DiamondSpark', status: 'Available', material: 'Diamond', gemstones: 'Diamond' },
    { id: 3, name: 'Silver Bracelet', category: 'Bracelet', price: '₹3500', imageUrl: bracelet1, ratings: '4.50', reviews: '5', brand: 'SilverLine', status: 'Out of Stock', material: 'Silver', gemstones: 'None' },
    { id: 4, name: 'Pearl Earrings', category: 'Earrings', price: '₹2000', imageUrl: earrings1, ratings: '4.33', reviews: '3', brand: 'PearlAura', status: 'Available', material: 'Pearl', gemstones: 'Pearl' },
    { id: 5, name: 'Silver Necklace', category: 'Necklace', price: '₹2500', imageUrl: necklace2, ratings: '2.00', reviews: '3', brand: 'GoldCo', status: 'Out of Stock', material: 'Gold', gemstones: 'None' },
    { id: 6, name: 'Gold Diamond Ring', category: 'Ring', price: '₹4000', imageUrl: ring2, ratings: '3.50', reviews: '4', brand: 'DiamondSpark', status: 'Available', material: 'Diamond', gemstones: 'Diamond' },
    { id: 7, name: 'Silver Bracelet', category: 'Bracelet', price: '₹1050', imageUrl: bracelet2, ratings: '2.50', reviews: '5', brand: 'SilverLine', status: 'Available', material: 'Silver', gemstones: 'None' },
    { id: 8, name: 'Pearl Earrings', category: 'Earrings', price: '₹6500', imageUrl: earrings2, ratings: '3.33', reviews: '3', brand: 'PearlAura', status: 'Available', material: 'Pearl', gemstones: 'Pearl' },
    { id: 9, name: 'Gold Necklace', category: 'Necklace', price: '₹2500', imageUrl: necklace3, ratings: '4.33', reviews: '10', brand: 'GoldCo', status: 'Out of Stock', material: 'Gold', gemstones: 'None' },
    { id: 10, name: 'Diamond Ring', category: 'Ring', price: '₹4800', imageUrl: ring3, ratings: '5.00', reviews: '2', brand: 'DiamondSpark', status: 'Available', material: 'Diamond', gemstones: 'Diamond' },
    { id: 11, name: 'Silver Bracelet', category: 'Bracelet', price: '₹1050', imageUrl: bracelet3, ratings: '4.47', reviews: '3', brand: 'SilverLine', status: 'Available', material: 'Silver', gemstones: 'None' },
    { id: 12, name: 'Pearl Earrings', category: 'Earrings', price: '₹11000', imageUrl: earrings3, ratings: '3.00', reviews: '4', brand: 'PearlAura', status: 'Out of Stock', material: 'Pearl', gemstones: 'Pearl' },
    { id: 13, name: 'Diamond Necklace', category: 'Necklace', price: '₹12500', imageUrl: necklace4, ratings: '3.33', reviews: '3', brand: 'GoldCo', status: 'Available', material: 'Gold', gemstones: 'None' },
    { id: 14, name: 'Diamond Ring', category: 'Ring', price: '₹7400', imageUrl: ring4, ratings: '4.50', reviews: '3', brand: 'DiamondSpark', status: 'Available', material: 'Diamond', gemstones: 'Diamond' },
    { id: 15, name: 'Diamond Bracelet', category: 'Bracelet', price: '₹8500', imageUrl: bracelet4, ratings: '4.33', reviews: '7', brand: 'SilverLine', status: 'Available', material: 'Silver', gemstones: 'None' },
    { id: 16, name: 'Pearl Earrings', category: 'Earrings', price: '₹6100', imageUrl: earrings4, ratings: '3.50', reviews: '3', brand: 'PearlAura', status: 'Out of Stock', material: 'Pearl', gemstones: 'Pearl' },
    { id: 17, name: 'Gold Necklace', category: 'Necklace', price: '₹8050', imageUrl: necklace5, ratings: '4.33', reviews: '4', brand: 'GoldCo', status: 'Available', material: 'Gold', gemstones: 'None' },
    { id: 18, name: 'Diamond Ring', category: 'Ring', price: '₹7540', imageUrl: ring5, ratings: '4.87', reviews: '8', brand: 'DiamondSpark', status: 'Available', material: 'Diamond', gemstones: 'Diamond' },
    { id: 19, name: 'Gold Bracelet', category: 'Bracelet', price: '₹4850', imageUrl: bracelet5, ratings: '4.90', reviews: '9', brand: 'SilverLine', status: 'Available', material: 'Silver', gemstones: 'None' },
    { id: 20, name: 'Pearl Earrings', category: 'Earrings', price: '₹6800', imageUrl: earrings5, ratings: '4.33', reviews: '3', brand: 'PearlAura', status: 'Out of Stock', material: 'Pearl', gemstones: 'Pearl' },
];


const ShopPage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [filter, setFilter] = useState('*');
    const [minPrice, setMinPrice] = useState(1000);
    const [maxPrice, setMaxPrice] = useState(12500);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
    const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
    const [selectedGemstones, setSelectedGemstones] = useState<string[]>([]);

    const handleFilter = (category: string) => {
        setFilter(category);
        setSidebarOpen(false);
    };

    const handlePriceFilter = () => {
        setSidebarOpen(false);
    };

    const handleBrandFilter = (brand: string) => {
        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const handleStatusFilter = (status: string) => {
        setSelectedStatus(prev =>
            prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
        );
    };

    const handleMaterialFilter = (material: string) => {
        setSelectedMaterials(prev =>
            prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material]
        );
    };

    const handleGemstoneFilter = (gemstone: string) => {
        setSelectedGemstones(prev =>
            prev.includes(gemstone) ? prev.filter(g => g !== gemstone) : [...prev, gemstone]
        );
    };


    // const filteredProducts = products.filter((product) => {
    //     const categoryMatch = filter === "*" || product.category === filter;
    //     const priceMatch = Number(product.price.replace('₹', '').trim()) >= minPrice && Number(product.price.replace('₹', '').trim()) <= maxPrice;

    //     return categoryMatch && priceMatch;
    // });

    const filteredProducts = products.filter((product) => {
        const categoryMatch = filter === "*" || product.category === filter;
        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const statusMatch = selectedStatus.length === 0 || selectedStatus.includes(product.status);
        const materialMatch = selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
        const gemstoneMatch = selectedGemstones.length === 0 || selectedGemstones.some(gemstone => product.gemstones.includes(gemstone));
        const priceMatch = Number(product.price.replace('₹', '').trim()) >= minPrice && Number(product.price.replace('₹', '').trim()) <= maxPrice;

        return categoryMatch && brandMatch && statusMatch && materialMatch && gemstoneMatch && priceMatch;
    });


    return (
        <div className="min-h-screen [#FAF7F5]">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Shop</h1>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12  z-50">
                <div className="px-4 sm:px-6 lg:px-8 py-6">
                    <Sheet open={isSidebarOpen}>
                        <SheetTrigger asChild>
                            <Button className="bg-gray-800 text-white px-4 rounded flex items-center" >
                                <span className="mr-2">
                                    <FiFilter className="w-5 h-5" />
                                </span>
                                Filter
                            </Button>
                        </SheetTrigger>
                        <SheetContent side={'left'} >
                            <SheetHeader>
                                <VisuallyHidden.Root>
                                    <SheetTitle>Filter Products</SheetTitle>
                                    <SheetDescription>Apply filters to narrow down your search.</SheetDescription>
                                </VisuallyHidden.Root>
                            </SheetHeader>

                            <div className="overflow-y-auto max-h-full">
                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold mb-2">Filter by Categories</h3>
                                    {[{ label: "ALL", category: "*" }, { label: "Necklace", category: "Necklace" }, { label: "Bracelet", category: "Bracelet" }, { label: "Ring", category: "Ring" }, { label: "Earrings", category: "Earrings" }].map(({ label, category }) => (
                                        <div
                                            key={category}
                                            onClick={() => handleFilter(category)}
                                            className={`p-1 text-sm uppercase cursor-pointer ${filter === category ? "text-rose-200" : "text-black"}`}
                                        >
                                            {label}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold mb-2">Filter by Brands</h3>
                                    {['BOSS', 'GUCCI'].map(brand => (
                                        <div key={brand} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                checked={selectedBrands.includes(brand)}
                                                onChange={() => handleBrandFilter(brand)}
                                                className="h-4 w-4"
                                            />
                                            <span className="p-1 text-sm">{brand}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold mb-2">Product Status</h3>
                                    {['In Stock', 'On Sale'].map(status => (
                                        <div key={status} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                checked={selectedStatus.includes(status)}
                                                onChange={() => handleStatusFilter(status)}
                                                className="h-4 w-4"
                                            />
                                            <span className="p-1 text-sm">{status}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold mb-2">Filter by Material</h3>
                                    {['Gold', 'Platinum', 'Rose Gold', 'Sterling Silver', 'White Gold'].map(material => (
                                        <div key={material} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                checked={selectedMaterials.includes(material)}
                                                onChange={() => handleMaterialFilter(material)}
                                                className="h-4 w-4"
                                            />
                                            <span className="p-1 text-sm">{material}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold mb-2">Filter by Gemstones</h3>
                                    {['Diamonds', 'Pearls', 'Sapphires', 'Tanzanites', 'Turquoise'].map(gemstone => (
                                        <div key={gemstone} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                checked={selectedGemstones.includes(gemstone)}
                                                onChange={() => handleGemstoneFilter(gemstone)}
                                                className="h-4 w-4"
                                            />
                                            <span className="p-1 text-sm">{gemstone}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold mb-2">Filter by Price</h3>
                                    <div className="flex flex-col gap-4">
                                        <Input
                                            type="number"
                                            placeholder="Min Price"
                                            value={minPrice}
                                            onChange={(e) => setMinPrice(Number(e.target.value))}
                                        />
                                        <Input
                                            type="number"
                                            placeholder="Max Price"
                                            value={maxPrice}
                                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                                        />
                                    </div>
                                    <button
                                        onClick={handlePriceFilter}
                                        className="mt-4 bg-transparent border border-gray-400 text-black py-2 px-4 rounded"
                                    >
                                        Apply Price Filter
                                    </button>
                                </div>

                                <SheetFooter>
                                    <SheetClose asChild>
                                        <Button type="submit" className="mt-4">
                                            Apply Filters
                                        </Button>
                                    </SheetClose>
                                </SheetFooter>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center lg:justify-start lg:items-start ">
                    {filteredProducts.map((product) => {
                        return (
                            <div key={product.id} className="group relative flex flex-col items-center lg:items-start p-4 bg-[#FAFAFA]">
                                <Link href={`/shop/${product.id}`} className="block overflow-hidden">
                                    <div className="relative mb-4 w-full">
                                        <div className="group relative w-[200px] h-[200px] lg:h-[250px] lg:w-[250px]">
                                            <Image
                                                src={product.imageUrl}
                                                alt={product.name}
                                                layout="fill"
                                                objectFit="contain"
                                                className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* <Link
                                            href="/wishlist"
                                            className="absolute top-4 right-4 hidden rounded-full bg-white p-2 group-hover:flex"
                                            aria-label="Add to Wishlist"
                                        >
                                            <span className="sr-only">Add to Wishlist</span>
                                            <FaHeart size={25} className="text-gray-500" />
                                        </Link>

                                        <Link
                                            href="/carts">
                                            <div className="absolute hidden bottom-0 left-0 right-0 bg-gray-200 text-black p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 group-hover:flex justify-center items-center">
                                                <span className="text-sm font-semibold">Add to cart</span>
                                            </div>
                                        </Link> */}

                                        <div
                                            className="absolute top-4 right-4 hidden rounded-full bg-white p-2 group-hover:flex"
                                            aria-label="Add to Wishlist"
                                        >
                                            <span className="sr-only">Add to Wishlist</span>
                                            <FaHeart size={25} className="text-gray-500" />
                                        </div>

                                        <div>
                                            <div className="absolute hidden bottom-0 left-0 right-0 bg-gray-200 text-black p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 group-hover:flex justify-center items-center">
                                                <span className="text-sm font-semibold">Add to cart</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start">
                                        <span className="text-sm text-gray-500">{product.category}</span>
                                        {/* <Link href={`/shop/${product.id}`} className="text-lg font-medium hover:text-gray-700">
                                            {product.name}
                                        </Link> */}
                                        <div className="text-lg font-medium hover:text-gray-700">
                                            {product.name}
                                        </div>
                                        <span className="mt-2 text-lg font-bold text-gray-900">{product.price}</span>
                                        <div className="flex flex-row gap-2 mt-2 text-sm font-medium text-gray-900">
                                            <IoStar />
                                            <h1 className=' font-semibold'>{product.ratings}</h1>
                                            <span>{product.reviews} reviews</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div >
    );
};

export default ShopPage;
