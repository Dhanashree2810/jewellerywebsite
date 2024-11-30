"use client"
import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Gem, Edit3, Save, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import userprofile from '@/assets/images/user profile.png'


const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  address: z.string().min(5, "Address must be at least 5 characters."),
  birthdate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Please use YYYY-MM-DD format."),
  favoriteGem: z.string().optional(),
  img: z.union([z.instanceof(File), z.any()]).nullable(),
  bio: z.string().max(500, "Bio must not exceed 500 characters.").optional(),
})

type UserData = z.infer<typeof formSchema>

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileImage, setProfileImage] = useState<StaticImageData | string>(userprofile);
  const [userData, setUserData] = useState<UserData>({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@example.com",
    phone: "123-456-7890",
    address: "123 Jewel Street, Gem City, 12345",
    birthdate: "1990-05-15",
    favoriteGem: "Sapphire",
    img: userprofile,
    bio: "Jewelry enthusiast with a passion for unique designs and rare gems.",
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const form = useForm<UserData>({
    resolver: zodResolver(formSchema),
    defaultValues: userData,
  })

  function onSubmit(values: UserData) {
    setUserData(values)
    setIsEditing(false)
  }

  return (
    <div className="relative w-full">
      <div className="w-full px-4 py-5 sm:px-8 sm:py-10 lg:px-48 lg:py-16 bg-[#FAF7F5]">
        <div className='bg-white'>
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-purple-500 to-pink-500">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                  <h1 className="text-3xl font-bold">{userData.firstName} {userData.lastName}</h1>
                  <p className="text-sm opacity-75">Member since 2024</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-10 left-6">
                  <div className=" bg-white rounded-full p-1 shadow-lg w-[100px] h-[100px]">
                    <Image
                      src={profileImage}
                      alt="Profile"
                      layout='fill'
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 pt-20">
                {!isEditing ? (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center mt-5">
                      <h2 className="text-xl lg:text-2xl font-semibold flex items-center">
                        <Gem className="mr-2 text-purple-500" /> Profile Information
                      </h2>
                      <Button onClick={() => setIsEditing(true)} variant="outline">
                        <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
                      </Button>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Email</h3>
                        <p className="mt-1 text-sm text-gray-900">{userData.email}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                        <p className="mt-1 text-sm text-gray-900">{userData.phone}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Address</h3>
                        <p className="mt-1 text-sm text-gray-900">{userData.address}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Birthdate</h3>
                        <p className="mt-1 text-sm text-gray-900">{userData.birthdate}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Favorite Gem</h3>
                        <p className="mt-1 text-sm text-gray-900">{userData.favoriteGem || "Not specified"}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Bio</h3>
                      <p className="mt-1 text-sm text-gray-900">{userData.bio || "No bio provided."}</p>
                    </div>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="flex justify-between items-center mt-5">
                        <h2 className="text-2xl font-semibold flex items-center">
                          <Gem className="mr-2 text-purple-500" /> Edit Profile
                        </h2>
                        <div>
                          <Button type="submit" className="mr-2">
                            <Save className="mr-2 h-4 w-4" /> Save Changes
                          </Button>
                          <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                            <X className="mr-2 h-4 w-4" /> Cancel
                          </Button>
                        </div>
                      </div>
                      <Separator />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
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
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input {...field} type="email" />
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
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input {...field} type="tel" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="birthdate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Birthdate</FormLabel>
                              <FormControl>
                                <Input {...field} type="date" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="favoriteGem"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Favorite Gem</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="img"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>User Profile</FormLabel>
                              <FormControl>
                                <Input type="file" accept="image/*" onChange={handleImageChange} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Tell us about yourself..."
                                className="h-32"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}