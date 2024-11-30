"use client"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { Minus, Plus, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import necklace from '@/assets/images/2-6.jpg'
import earrings from '@/assets/images/1-8.jpg'
import Link from "next/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: StaticImageData
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Venus Golden Necklace",
      price: 325.00,
      quantity: 1,
      image: necklace
    },
    {
      id: "2",
      name: "Sone Golden Earrings",
      price: 325.00,
      quantity: 1,
      image: earrings
    }
  ])
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: StaticImageData | string) => {
    const imageUrl = typeof image === "string" ? image : image.src;
    setSelectedImage(imageUrl);
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const total = subtotal

  return (
    <div className="relative w-full">
      <div className="w-full px-4 py-5 sm:px-8 sm:py-10 lg:px-48 lg:py-16 bg-[#FAF7F5]">
        <div className="container mx-auto px-4 py-8 lg:py-20 bg-white">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-8">Cart</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-x-auto">
                <Table className="min-w-full table-auto">
                  <TableHeader className="border-b bg-[#FAF7F5]">
                    <TableRow className="border-b bg-[#FAF7F5]  hover:bg-[#FAF7F5]">
                      <TableHead className="font-semibold text-left text-black text-[16px] py-4 px-2">Product</TableHead>
                      <TableHead className="font-semibold text-left text-black text-[16px] py-4 px-2">Price</TableHead>
                      <TableHead className="font-semibold text-left text-black text-[16px] py-4 px-2">Quantity</TableHead>
                      <TableHead className="font-semibold text-left text-black  text-[16px] py-4 px-2">Subtotal</TableHead>
                      <TableHead className="font-semibold text-left text-black text-[16px] py-4 px-2"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id} className="border-b">
                        <TableCell className="p-4">
                          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="rounded-md cursor-pointer"
                              onClick={() => handleImageClick(item.image)}
                            />
                            <span className="font-semibold text-sm lg:text-[16px]">{item.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="p-4">
                          ₹{item.price.toFixed(2)}
                        </TableCell>
                        <TableCell className="p-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                              className="w-16 h-8 text-center"
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className="p-4">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </TableCell>
                        <TableCell className="p-4">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-500 bg-white hover:bg-white  border border-gray-400"
                            onClick={() => removeItem(item.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Table className="w-full border-collapse">
                <TableHeader>
                  <TableRow className="border-b bg-[#FAF7F5] hover:bg-[#FAF7F5]">
                    <TableHead className="font-semibold text-left text-black text-[16px] py-4 px-2">Cart totals</TableHead >
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="w-full">
                  <TableRow className="">
                    <TableHead className="py-4 px-2">
                      Subtotal
                    </TableHead>
                    <TableCell className="py-4 px-2">
                      ₹{subtotal.toFixed(2)}
                    </TableCell>
                  </TableRow>
                  <TableRow className="">
                    <TableHead className="py-4 px-2">
                      Total
                    </TableHead>
                    <TableCell className="py-4 px-2">
                      ₹{total.toFixed(2)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="space-y-4">
                  <div className="pt-4">
                    <p className="text-sm text-gray-600 mb-4">Have a coupon?</p>
                    <Link href="/checkout">
                      <Button className="w-full bg-white text-black border border-black hover:bg-transparent text-sm lg:text-[16px]" size="lg">
                        PROCEED TO CHECKOUT
                      </Button>
                    </Link>
                  </div>
                </div>
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
                <Button variant="outline" onClick={() => setSelectedImage(null)}>
                  Close
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  )
}
