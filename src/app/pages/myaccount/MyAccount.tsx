'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import globalschema from "../../../../globalschema";


export default function MyAccount() {
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPassword, setCustomerPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState<Record<string, string | undefined>>({});
  const [registerErrors, setRegisterErrors] = useState<Record<string, string | undefined>>({});
  const [customerName, setCustomerName] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginErrors({});

    const result = globalschema.safeParse({ email: customerEmail, password: customerPassword });

    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setLoginErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      });
      return;
    }
    console.log("Login Successful", { email: customerEmail, password: customerPassword });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterErrors({});

    const result = globalschema.safeParse({
      name: customerName,
      email: customerEmail,
      password: customerPassword,
    });

    if (result.success) {
      console.log("Account Created:", result);
      setRegisterErrors({});
      toast({
        title: "Account Created",
        description: "Your account has been created successfully.",
      });
    } else {
      const fieldErrors = result.error.errors.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {} as Record<string, string>);

      setRegisterErrors(fieldErrors);
    }
  };

  return (
    <div className="container mx-auto px-4 p-10 lg:p-20 max-w-6xl">
      <div className="flex items-center justify-center">

        <Tabs defaultValue="login" className="w-[600px]">
          <TabsList className="grid w-full grid-cols-2 bg-[#FAF7F5] text-black ">
            <TabsTrigger value="login" className="font-semibold text-sm lg:text-xl">Login</TabsTrigger>
            <TabsTrigger value="register" className="font-semibold text-sm lg:text-xl">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader className="flex flex-col justify-center items-center text-center">
                <VisuallyHidden.Root>
                  <CardTitle>Login</CardTitle>
                </VisuallyHidden.Root>
                <CardDescription>
                  If you have an account, sign in with your username or email
                  address.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <form onSubmit={handleLogin}>
                  <div className="space-y-1">
                    <Label htmlFor="customermail">Username or email address *</Label>
                    <Input
                      type="email"
                      name="customermail"
                      id="customermail"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                    />
                    {loginErrors.email && <p className="text-red-600 text-xs py-2">{loginErrors.email}</p>}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="customerpassword">Password *</Label>
                    <Input
                      type="password"
                      id="customerpassword"
                      name="customerpassword"
                      value={customerPassword}
                      onChange={(e) => setCustomerPassword(e.target.value)}
                    />
                    {loginErrors.password && <p className="text-red-600 text-xs py-2">{loginErrors.password}</p>}
                  </div>

                  <div className="flex flex-row justify-between items-center space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="rememberme" />
                      <label
                        htmlFor="rememberme"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link href="/lostpassword" className="text-sm text-black cursor-pointer hover:border-b-2 hover:border-black">
                      <h1>
                        Lost Your Password?
                      </h1>
                    </Link>
                  </div>

                  <div className="flex justify-between mt-4">
                    <Button
                      type="submit"
                      className="text-sm  px-4 py-4 rounded-md w-fit"
                    >
                      Log In
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
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader className="flex flex-col justify-center items-center text-center">
                <VisuallyHidden.Root>
                  <CardTitle>Register</CardTitle>
                </VisuallyHidden.Root>
                <CardDescription>
                  There are many advantages to creating an account: the
                  payment process is faster, shipment tracking is possible,
                  and much more.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <form onSubmit={handleRegister}>
                  <div className="space-y-2">
                    <Label htmlFor="customername">Username *</Label>
                    <Input
                      type="text"
                      id="customername"
                      name="customername"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                    {registerErrors.name && <p className="text-red-500 text-xs py-2">{registerErrors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="customermail">Email address *</Label>
                    <Input
                      type="email"
                      name="customermail"
                      id="customermail"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                    />
                    {registerErrors.email && <p className="text-red-500 text-xs py-2">{registerErrors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="customerpassword">Password *</Label>
                    <Input
                      type="password"
                      id="customerpassword"
                      name="customerpassword"
                      value={customerPassword}
                      onChange={(e) => setCustomerPassword(e.target.value)}
                    />
                    {registerErrors.password && <p className="text-red-500 text-xs py-2">{registerErrors.password}</p>}
                  </div>

                  <div className="space-y-2 py-3">
                    <RadioGroup defaultValue="comfortable">
                      <div className="flex items-center space-x-2 space-y-2">
                        <RadioGroupItem value="default" id="customer" />
                        <Label htmlFor="customer" className="text-xs">
                          I am a customer
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 space-y-2">
                        <RadioGroupItem value="comfortable" id="vendor" />
                        <Label htmlFor="vendor" className="text-xs">
                          I am a vendor
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs">
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our privacy policy
                    </p>
                  </div>

                  <div className="flex justify-between mt-4">
                    <Button
                      type="submit"
                      className="text-sm  px-4 py-4 rounded-md w-fit"
                    >
                      Register
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
function toast(arg0: { title: string; description: string; }) {
  throw new Error("Function not implemented.");
}

