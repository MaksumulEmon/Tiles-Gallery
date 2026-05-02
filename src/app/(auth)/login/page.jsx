
"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Target } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { error } from "better-auth/api";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";


export default function SignInPage() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: '/'
        })


        // if (error) {
        //     toast.error(error.message);
        //     return;
        // }


        // if (data) {
        //     toast.success(` Login successful!`);
        // }


        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("Login successful!");

        console.log({ data, error })

    };


    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: 'google'
        })
    }


    const [showPassword, setShowPassword] = useState(false);


    return (
        <div className="flex  items-center justify-center p-4">
            <Card className="border w-full max-w-md py-10 shadow-sm">
                <h1 className="text-center text-4xl sm:text-4xl font-extrabold mb-8 tracking-tight bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600 text-transparent bg-clip-text">
                    Welcome to Tiles Gallery
                </h1>

                <Form className="flex w-full px-6 flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex flex-col sm:flex-row gap-3 mt-2">
                        <Button type="submit" className="w-full  rounded">
                            <Check /> Sign in
                        </Button>

                    </div>
                </Form>

                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-5 py-1 rounded-2xl text-muted-foreground">Or continue with</span>
                    </div>
                </div>

                <Button
                    variant="outline"
                    onClick={handleGoogleSignIn}
                    className="w-full flex items-center justify-center gap-2 font-medium rounded"
                >
                    <FcGoogle className="h-5 w-5" />
                    Sign in with Google
                </Button>


                <div className="flex items-center justify-between mt-4 text-sm">

                    <p className="text-muted-foreground">
                        Don’t have an account?{" "}
                        <Link href="/register" className="text-blue-500 hover:underline font-medium">
                            Sign up
                        </Link>
                    </p>

                    <p
                        href="/forgot-password"
                        className="text-blue-500 hover:underline font-medium"
                    >
                        Forgot Password?
                    </p>

                </div>
            </Card>
        </div>

    );
}





