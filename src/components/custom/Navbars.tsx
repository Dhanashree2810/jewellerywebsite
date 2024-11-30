"use client";
import { useState } from "react";
import Link from "next/link";
import { LogInIcon, LogOut, Menu, Search, User, X } from 'lucide-react';
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { IoMdCart } from "react-icons/io";
import { IoDiamondOutline, IoPerson } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RiOrderPlayFill } from "react-icons/ri";
import { MdShoppingCartCheckout } from "react-icons/md";

const menuItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About Us", href: "/aboutus" },
    { name: "Contact", href: "/contact" },
];

export default function Navbars() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (link: string) => {
        return pathname === link || pathname.startsWith(link + "/");
    };

    return (
        <header className="sticky bg-[#FAF3E6] top-0 z-50 w-full border-b border-gray-500">
            <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-red-50 pt-16 sheetcon">
                            <VisuallyHidden.Root>
                                <SheetTitle className="text-black">Menu</SheetTitle>
                            </VisuallyHidden.Root>
                            <nav className="flex flex-col gap-4">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`text-black w-fit uppercase text-sm font-semibold transition-colors hover:text-primary ${isActive(item.href) ? "border-b-2 border-gray-800" : ""
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>

                    <nav className="hidden lg:flex lg:items-center lg:gap-6">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm uppercase font-medium transition-colors hover:text-primary ${isActive(item.href) ? "border-b-2 border-gray-800" : ""
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="flex flex-row justify-center items-center text-center">
                            <IoDiamondOutline className="rounded-full p-1 sm:p-2 text-black" size={38} />
                            <h1 className="text-lg sm:text-xl font-bold">RadEI</h1>
                        </div>
                    </Link>
                </div>

                <div className="flex items-center flex-1 gap-2 sm:gap-4">
                    <div className="relative hidden lg:flex items-center flex-1 max-w-xs">
                        <Input
                            type="text"
                            className="w-full px-4 h-9 pl-10 my-1 bg-transparent border border-[#A69076] rounded-full"
                            name="name"
                            id="name"
                            placeholder="Search products..."
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#A69076]" />
                    </div>

                    {isSearchOpen ? (
                        <div className="lg:hidden absolute inset-x-0 top-16 z-50 flex h-16 items-center gap-4 bg-[#FAF3E6] px-4 border-b border-gray-500">
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="h-9 w-full bg-transparent border border-[#A69076] rounded-full"
                            />
                            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                                <X className="h-5 w-5" />
                                <span className="sr-only">Close search</span>
                            </Button>
                        </div>
                    ) : (
                        <Button className="lg:hidden" variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                            <Search className="h-5 w-5" />
                            <span className="sr-only">Search products</span>
                        </Button>
                    )}

                    <div className="flex items-center justify-end gap-2">
                        <Link href="/wishlist"><FaHeart className="rounded-full p-1.5 sm:p-2 text-white bg-[#A69076] cursor-pointer" size={35} /></Link>
                        <Link href="/carts"> <IoMdCart className="rounded-full p-1.5 sm:p-2 text-white bg-[#A69076] cursor-pointer" size={35} /></Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <IoPerson className="rounded-full p-1.5 sm:p-2 text-white bg-[#A69076] cursor-pointer" size={35} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-48 text-white bg-[#A69076]">
                                <DropdownMenuGroup>                                   
                                    <Link href="/myaccount" >
                                        <DropdownMenuItem className="cursor-pointer hover:bg-white hover:text-[#A69076]">
                                            <LogInIcon className="mr-2 h-4 w-4" />
                                            <span>Login</span>
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/userprofile" >
                                        <DropdownMenuItem className="cursor-pointer hover:bg-white hover:text-[#A69076]">
                                            <User className="mr-2 h-4 w-4" />
                                            <span>Profile</span>
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/myorders" >
                                        <DropdownMenuItem className="cursor-pointer hover:bg-white hover:text-[#A69076]">
                                            <RiOrderPlayFill className="mr-2 h-4 w-4" />
                                            <span>My Orders</span>
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/checkout">
                                        <DropdownMenuItem className="cursor-pointer hover:bg-white hover:text-[#A69076]">
                                            <MdShoppingCartCheckout className="mr-2 h-4 w-4" />
                                            <span>Checkout</span>
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/">
                                        <DropdownMenuItem className="cursor-pointer hover:bg-white hover:text-[#A69076]">
                                            <LogOut className="mr-2 h-4 w-4" />
                                            <span>Logout</span>
                                        </DropdownMenuItem>
                                    </Link>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    );
}

