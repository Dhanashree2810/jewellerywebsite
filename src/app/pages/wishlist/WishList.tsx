"use client"
import { X } from 'lucide-react'
import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import pendant from '@/assets/images/2-6.jpg'
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


interface WishlistItem {
  id: string
  name: string
  price: number
  originalPrice: number
  dateAdded: string
  inStock: boolean
  imageUrl: StaticImageData
}

const wishlistItems: WishlistItem[] = [
  {
    id: "1",
    name: "18ct White Gold 0.11cttw Diamond Twist & Aquamarine Pendant",
    price: 655.00,
    originalPrice: 885.00,
    dateAdded: "November 27, 2024",
    inStock: true,
    imageUrl: pendant
  }
]

export default function Wishlist() {
  const [initialProducts, setinitialProducts] = useState(wishlistItems);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    const updatedProducts = wishlistItems.filter((product) => product.id !== id);
    setinitialProducts(updatedProducts);
  };

  const handleImageClick = (image: StaticImageData | string) => {
    const imageUrl = typeof image === "string" ? image : image.src;
    setSelectedImage(imageUrl);
  };

  return (
    <div className="relative w-full">
      <div className="w-full px-4 py-5 sm:px-8 sm:py-10 lg:px-48 lg:py-16 bg-[#FAF7F5]">
        <div className="container mx-auto px-4 py-8 bg-white">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-8">Wishlist</h1>
          <div className="overflow-x-auto">
            <Table className="min-w-full border-collapse table-auto">
              <TableHeader>
                <TableRow className="border-b bg-[#FAF7F5] hover:bg-[#FAF7F5]">
                  <TableHead className="font-semibold text-left text-black text-sm lg:text-[16px] py-4 px-2">Product</TableHead >
                  <TableHead className="font-semibold text-left text-black text-sm lg:text-[16px] py-4 px-2">Price</TableHead >
                  <TableHead className="font-semibold text-left text-black text-sm lg:text-[16px] py-4 px-2">Date Added</TableHead >
                  <TableHead className="font-semibold text-left text-black text-sm lg:text-[16px] py-4 px-2">Stock</TableHead >
                  <TableHead className="font-semibold text-left text-black text-sm lg:text-[16px] py-4 px-2">Add to cart</TableHead >
                  <TableHead className="font-semibold text-left text-black text-sm lg:text-[16px] py-4 px-2"></TableHead >
                </TableRow>
              </TableHeader>
              <TableBody>
                {initialProducts.map((item) => (
                  <TableRow key={item.id} className="border-b">
                    <TableCell className="py-4 px-2">
                      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded-md cursor-pointer"
                          onClick={() => handleImageClick(item.imageUrl)}
                        />
                        <span className="font-medium text-xs lg:text-[16px]">{item.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 px-2">
                      <div className="flex flex-col gap-2">
                        <span className="text-[16px] line-through text-gray-500 font-semibold">
                          ₹{item.originalPrice.toFixed(2)}
                        </span>
                        <span className="font-medium">
                          ₹{item.price.toFixed(2)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 px-2">{item.dateAdded}</TableCell>
                    <TableCell className="py-4 px-2">
                      <span className="text-green-600 font-medium">
                        {item.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </TableCell>
                    <TableCell className="py-4 px-2">
                      <Link href="/carts">
                        <Button className="bg-[#ff6b6b] text-white px-4 py-2 rounded hover:bg-[#ff5252] transition-colors cursor-pointer">
                          Add To Cart
                        </Button>
                      </Link>
                    </TableCell>
                    <TableCell className="py-4 px-2">
                      <Button className="text-gray-500 bg-white hover:bg-white  border border-gray-400"
                        onClick={() => handleDelete(item.id)}
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-600 mb-4">Share on:</p>
            <div className="flex gap-2">
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-[#1877f2] text-white hover:bg-[#166fe5] transition-colors"
              >
                <FiFacebook className="rounded-full p-2 text-white bg-transparent hover:cursor-pointer" size={35} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-[#1da1f2] text-white hover:bg-[#1a91da] transition-colors"
              >
                <FaTwitter className="rounded-full p-2 text-white bg-transparent hover:cursor-pointer" size={35} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-[#e4405f] text-white hover:bg-[#d93250] transition-colors"
              >
                <FaInstagram className="rounded-full p-2 text-white bg-transparent hover:cursor-pointer" size={35} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-[#0077b5] text-white hover:bg-[#006396] transition-colors"
              >
                <FaLinkedin className="rounded-full p-2 text-white bg-transparent hover:cursor-pointer" size={35} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogTrigger asChild>
            <Button className="hidden" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <VisuallyHidden.Root>
              <DialogHeader>
                <DialogTitle>Image Preview</DialogTitle>
                <DialogDescription>Click outside to close the preview.</DialogDescription>
              </DialogHeader>
            </VisuallyHidden.Root>
            <div className="flex justify-center items-center py-4">
              <Image
                src={selectedImage}
                alt="Selected Image"
                width={500}
                height={500}
                className="rounded-md transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <DialogFooter>
              <Button onClick={() => setSelectedImage(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

