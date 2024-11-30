"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import necklace from '@/assets/images/2-6.jpg'
import earrings from '@/assets/images/1-8.jpg'


const formSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  companyName: z.string().optional(),
  country: z.string().min(1),
  streetAddress: z.string().min(5),
  apartment: z.string().optional(),
  city: z.string().min(2),
  state: z.string().min(2),
  zipCode: z.string().min(5),
  phone: z.string().min(10),
  orderNotes: z.string().optional(),
})

interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  image: StaticImageData
}

export default function Checkout() {
  const [orderItems] = useState<OrderItem[]>([
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      companyName: "",
      country: "India (IN)",
      streetAddress: "",
      apartment: "",
      city: "",
      state: "",
      zipCode: "",
      phone: "",
      orderNotes: "",
    },
  })

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const total = subtotal

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="relative w-full">
      <div className="w-full px-4 py-5 sm:px-8 sm:py-10 lg:px-48 lg:py-16 bg-[#FAF7F5]">
        <div className='bg-white'>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl lg:text-3xl font-semibold mb-8">Checkout</h1>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-lg lg:text-xl font-semibold">Customer information</h2>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email address *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-lg lg:text-xl font-semibold">Billing details</h2>
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First name *</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last name *</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company name (optional)</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country / Region *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="IN">India</SelectItem>
                                <SelectItem value="AU">Australia</SelectItem>
                                <SelectItem value="CA">Canada</SelectItem>
                                <SelectItem value="FR">France</SelectItem>
                                <SelectItem value="DE">Germany</SelectItem>
                                <SelectItem value="UK">United Kingdom</SelectItem>
                                <SelectItem value="US">United States</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="streetAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Street address *</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="House number and street name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="apartment"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Apartment, suite, unit, etc. (optional)</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Town / City *</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a state" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="IN-MH">Maharashtra</SelectItem>
                                  <SelectItem value="IN-KA">Karnataka</SelectItem>
                                  <SelectItem value="AU-NSW">New South Wales</SelectItem>
                                  <SelectItem value="AU-VIC">Victoria</SelectItem>
                                  <SelectItem value="CA-ON">Ontario</SelectItem>
                                  <SelectItem value="CA-QC">Quebec</SelectItem>
                                  <SelectItem value="US-CA">California</SelectItem>
                                  <SelectItem value="US-NY">New York</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>PIN Code *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input {...field} type="tel" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-lg lg:text-xl font-semibold">Additional information</h2>
                      <FormField
                        control={form.control}
                        name="orderNotes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Order notes (optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Notes about your order, e.g. special notes for delivery."
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-lg lg:text-xl font-semibold">Payment</h2>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-600 text-sm">
                          Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or
                          wish to make alternate arrangements.
                        </p>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-white text-black hover:bg-black hover:text-white border border-black" size="lg">
                      PLACE ORDER ₹{total.toFixed(2)}
                    </Button>
                  </form>
                </Form>
              </div>

              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-lg lg:text-xl font-semibold mb-4">Your order</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between pb-2 border-b">
                      <span className="font-medium">Product</span>
                      <span className="font-medium">Subtotal</span>
                    </div>

                    {orderItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center pb-2 border-b">
                        <div className="flex items-center gap-2">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="rounded-md"
                          />
                          <span>{item.name} × {item.quantity}</span>
                        </div>
                        <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}

                    <div className="flex justify-between pb-2 border-b">
                      <span className="font-medium">Subtotal</span>
                      <span>₹{subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>₹{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

