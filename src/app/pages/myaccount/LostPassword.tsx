'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import globalschema from '../../../../globalschema';


export default function LostPassword() {
    const [customerEmail, setCustomerEmail] = useState('');
    const [errors, setErrors] = useState<{ email?: string; }>({});

    const handleRecoverPassword = (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        const result = globalschema.safeParse({ email: customerEmail });

        if (!result.success) {
            setErrors({ email: result.error.formErrors.fieldErrors.email?.[0] });
            return;
        }

        console.log("Password recovery initiated for:", customerEmail);
    };

    return (
        <div className="container mx-auto px-4 p-10 lg:p-20 max-w-6xl">
            <div className="flex items-center justify-center">
                <div className="flex flex-col gap-3 mt-2 lg:mt-6">
                    <Card className="w-[350px] lg:w-[500px]">
                        <CardHeader>
                            <CardTitle className="bg-[#FAF7F5] text-black p-3">
                                <h4 className="text-sm lg:text-lg font-semibold">
                                    Reset your password
                                </h4>
                            </CardTitle>
                            <CardDescription>
                                <p className=" text-xs my-3">We will send you an email to reset your password.</p>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleRecoverPassword}>
                                <div className='grid grid-cols-1 gap-5 mb-4'>
                                    <Input
                                        className="px-4 h-10 lg:h-12 bg-white text-sm rounded-none"
                                        type="email"
                                        name="customermail"
                                        id="customermail"
                                        value={customerEmail}
                                        onChange={(e) => setCustomerEmail(e.target.value)}
                                        placeholder="Email"
                                    />
                                    {errors.email && <p className="text-red-600 text-xs py-2">{errors.email}</p>}
                                </div>

                                <div className="flex justify-between mt-4">
                                    <Button
                                        type="submit"
                                        className="text-sm  px-4 py-4 rounded-md w-fit"
                                    >
                                        Reset Password
                                    </Button>
                                    <Link href="/">
                                        <div
                                            className="text-black hover:text-[#D0BAA5] text-sm cursor-pointer hover:border-b-2 hover:border-black"
                                        >
                                            Cancel
                                        </div>
                                    </Link>
                                </div>
                            </form>
                        </CardContent>
                        <VisuallyHidden.Root>
                            <CardFooter>
                            </CardFooter>
                        </VisuallyHidden.Root>
                    </Card>
                </div>
            </div>
        </div>
    )
}
