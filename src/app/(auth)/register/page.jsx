// import React from 'react';

// const Registerpage = () => {
//     return (
//         <div>
//             Register
//         </div>
//     );
// };

// export default Registerpage;






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
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignUpPage() {

    const router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        })


        console.log({ data, error })

        if (error) {
        toast.error( error.message);
        }
        if (data) {
            toast.success("sign up sucessfull");
        }


    };

    return (
        <div className="flex  items-center justify-center p-4">
            {/* max-w-md ensures it doesn't get too wide on desktop, w-full ensures it fits mobile */}
            <Card className="border w-full max-w-md py-10 shadow-sm">
                <h1 className="text-center text-2xl font-bold mb-6">Sign Up</h1>

                {/* Changed w-96 to w-full and added horizontal padding */}
                <Form className="flex w-full px-6 flex-col gap-4" onSubmit={onSubmit}>
                    <TextField isRequired name="name" type="text">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

                    <TextField isRequired name="image" type="text">
                        <Label>Image URL</Label>
                        <Input placeholder="Image URL" />
                        <FieldError />
                    </TextField>

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
                        <Button type="submit" className="w-full sm:w-auto">
                            <Check /> Submit
                        </Button>
                        <Button type="reset" variant="secondary" className="w-full sm:w-auto">
                            Reset
                        </Button>
                    </div>
                </Form>

                <br />
                <p className="text-center">Or</p>
                <Button variant="outline" className={"w-full rounded "}> Sign In With Google</Button>
            </Card>
        </div>

    );
}





