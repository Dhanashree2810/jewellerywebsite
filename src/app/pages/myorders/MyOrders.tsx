"use client"
import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp, Truck, Calendar, RotateCcw, FileText, HeadphonesIcon, MapPin, CreditCard } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import necklace from '@/assets/images/2-6.jpg'
import necklace2 from '@/assets/images/chain2.jpg'
import earrings from '@/assets/images/1-8.jpg'

interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  image: StaticImageData
}

interface Order {
  id: string
  date: string
  status: "Processing" | "Shipped" | "Out for Delivery" | "Delivered"
  total: number
  items: OrderItem[]
  trackingNumber?: string
  estimatedDelivery?: string
  shippingAddress: string
  paymentMethod: string
}

export default function MyOrders() {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "402-1815915-0645319",
      date: "November 28, 2024",
      status: "Delivered",
      total: 650.00,
      items: [
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
      ],
      trackingNumber: "IND123456789",
      estimatedDelivery: "December 5, 2024",
      shippingAddress: "123 Main St, Bangalore, Karnataka 560001",
      paymentMethod: "Credit Card"
    },
    {
      id: "408-1873312-3635336",
      date: "November 15, 2024",
      status: "Out for Delivery",
      total: 325.00,
      items: [
        {
          id: "3",
          name: "Venus Silver Necklace",
          price: 325.00,
          quantity: 1,
          image: necklace2
        }
      ],
      trackingNumber: "IND987654321",
      estimatedDelivery: "November 22, 2024",
      shippingAddress: "456 Park Ave, Mumbai, Maharashtra 400001",
      paymentMethod: "UPI"
    }
  ])

  const [expandedOrders, setExpandedOrders] = useState<string[]>([])

  const toggleOrderExpansion = (orderId: string) => {
    setExpandedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    )
  }

  const handleCancelOrder = (orderId: string) => {
    console.log(`Cancelling order ${orderId}`)
  }

  const handleReturnOrder = (orderId: string) => {
    console.log(`Returning order ${orderId}`)
  }

  return (
    <div className="relative w-full">
      <div className="w-full px-4 py-5 sm:px-8 sm:py-10 lg:px-48 lg:py-16 bg-[#FAF7F5]">
        <div className="container mx-auto px-4 py-8 bg-white">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-8">My Orders</h1>

          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white shadow rounded-lg overflow-hidden">
                <div className="">
                  <div className="flex justify-between items-start mb-4 bg-[#FAF7F5] text-black p-3">
                    <div>
                      <p className="text-sm lg:text-lg font-semibold">Order #{order.id}</p>
                      <p className="text-sm text-gray-500">Placed on {order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm lg:text-lg font-semibold">₹{order.total.toFixed(2)}</p>
                      <p className={`text-sm font-medium ${order.status === "Delivered" ? "text-green-600" :
                        order.status === "Out for Delivery" ? "text-blue-600" :
                          order.status === "Shipped" ? "text-indigo-600" :
                            "text-yellow-600"
                        }`}>
                        {order.status}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-6">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                      <div>
                        <p className="text-sm font-semibold">Shipping Address</p>
                        <p className="text-xs lg:text-sm text-gray-500">{order.shippingAddress}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CreditCard className="h-5 w-5 mr-2 text-gray-500" />
                      <div>
                        <p className="text-sm font-semibold">Payment Method</p>
                        <p className="text-xs lg:text-sm text-gray-500">{order.paymentMethod}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 p-6">
                    {order.estimatedDelivery && (
                      <p className="text-sm text-gray-500 flex items-center gap-2 ">
                        <Calendar className="h-4 w-4 mr-1 " />
                        <span className="font-semibold text-black">Est. Delivery:</span>  {order.estimatedDelivery}
                      </p>
                    )}
                    {order.trackingNumber && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <p className="text-sm text-black flex items-center cursor-pointer font-semibold">
                              <Truck className="h-4 w-4 mr-1" />
                              Track Order
                            </p>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Tracking #: {order.trackingNumber}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                    <Button variant="link" className="text-sm p-0 h-auto font-semibold">
                      <FileText className="h-4 w-4 mr-1" />
                      Download Invoice
                    </Button>
                    <Button variant="link" className="text-sm p-0 h-auto font-semibold">
                      <HeadphonesIcon className="h-4 w-4 mr-1" />
                      Get Support
                    </Button>
                  </div>
                </div>

                <div className="px-6 pb-4">
                  <Button
                    variant="outline"
                    onClick={() => toggleOrderExpansion(order.id)}
                    className="w-full flex justify-between items-center font-semibold"
                  >
                    {expandedOrders.includes(order.id) ? "Hide Details" : "View Details"}
                    {expandedOrders.includes(order.id) ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </div>

                {expandedOrders.includes(order.id) && (
                  <div className="px-6 pb-6">
                    <div className="overflow-x-auto">
                      <Table className="min-w-full table-auto">
                        <TableHeader>
                          <TableRow className="border-b bg-[#FAF7F5] hover:bg-[#FAF7F5]">
                            <TableHead className="font-semibold text-left text-black text-sm lg:text-[16px] py-2 px-2">Product</TableHead>
                            <TableHead className="font-semibold text-left text-black text-sm lg:text-[16px] py-2 px-2">Price</TableHead>
                            <TableHead className="font-semibold text-left text-black text-sm lg:text-[16px] py-2 px-2">Quantity</TableHead>
                            <TableHead className="text-right font-semibold text-black text-sm lg:text-[16px] py-2 px-2">Total</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {order.items.map((item) => (
                            <TableRow key={item.id} className="border-b">
                              <TableCell className="py-4 px-2 sm:px-4">
                                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={80}
                                    height={80}
                                    className="rounded-md"
                                  />
                                  <span className="font-semibold text-sm lg:text-[16px]">{item.name}</span>
                                </div>
                              </TableCell>
                              <TableCell className="font-medium text-sm lg:text-[16px]">₹{item.price.toFixed(2)}</TableCell>
                              <TableCell className="font-medium text-sm lg:text-[16px]">{item.quantity}</TableCell>
                              <TableCell className="text-right font-semibold text-sm lg:text-[16px]">₹{(item.price * item.quantity).toFixed(2)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    <div className="mt-4 flex justify-end space-x-2">
                      {order.status === "Processing" && (
                        <Button
                          variant="destructive"
                          onClick={() => handleCancelOrder(order.id)}
                          className="font-semibold"
                        >
                          Cancel Order
                        </Button>
                      )}
                      {order.status === "Delivered" && (
                        <Button
                          variant="outline"
                          onClick={() => handleReturnOrder(order.id)}
                          className="flex items-center font-semibold"
                        >
                          <RotateCcw className="h-4 w-4 mr-2" />
                          Return Order
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {orders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">You haven't placed any orders yet.</p>
              <Link href="/shop" passHref>
                <Button>Start Shopping</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

