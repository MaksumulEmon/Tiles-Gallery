
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Mynavlink from "./Mynavlink";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import toast from "react-hot-toast";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const userData = authClient.useSession()
    const user = userData.data?.user



    const handlelogout = async () => {
        await authClient.signOut();
        toast.success("Log out")

    }



    return (
        <div className="bg-[#FAFAF9]/90 backdrop-blur-md sticky top-0 z-2500 border-b border-[#E7E5E4] py-3">
            <div className="mx-6 md:mx-20 flex justify-between items-center py-3">

                {/* Logo */}
                <div className="flex items-center text-2xl md:text-2xl gap-2 font-bold text-[#171717]">
                    <Link href="/">
                        Tiles Gallery
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6">
                    <li><Mynavlink href="/">Home</Mynavlink></li>
                    <li><Mynavlink href="/alltiles">All Tiles</Mynavlink></li>
                    <li><Mynavlink href="/myprofile">My Profile</Mynavlink></li>
                </ul>

                {/* Right Side */}
                <div className="flex items-center gap-3">



                    {/* Profile Image */}
                    {/* <Image
                        src={logo}
                        alt="logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    /> */}


                    {/* Login button lg:deivce */}
                    {!user && <div className="flex justify-between gap-3">
                        <Link href="/login" className="hidden md:block">
                            <button className="bg-[#171717] text-white px-4 py-2 rounded font-semibold">
                                Login
                            </button>
                        </Link>

                        <Link href="/register" className="hidden md:block">
                            <button className="bg-[#171717] text-white px-4 py-2 rounded font-semibold">
                                Register
                            </button>
                        </Link>
                    </div>}



                    {
                        user && <div className="flex  gap-3 justify-between">
                            <Avatar>
                                <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>

                            <Button onClick={handlelogout} variant="danger" className="text-white rounded font-medium   text-lg">Log out</Button>
                        </div>
                    }

                    {/* Ham burger Mobile */}
                    <button
                        className="md:hidden text-3xl"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <RxCross2 /> : <GiHamburgerMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-[#EBEDF4] px-6 pb-4 flex flex-col gap-3">
                    <Mynavlink href="/" onClick={() => setOpen(false)}>Home</Mynavlink>
                    <Mynavlink href="/alltiles" onClick={() => setOpen(false)}>All Tiles</Mynavlink>
                    <Mynavlink href="/myprofile" onClick={() => setOpen(false)}>My Profile</Mynavlink>


                    {/* Login button mobile */}
                    {!user && <div className="flex justify-between">

                        <Link href="/login">
                            <button className="mt-2 bg-[#171717] text-white px-4 py-2 rounded font-semibold">
                                Login
                            </button>
                        </Link>




                        <Link href="/register">
                            <button className="mt-2 bg-[#171717] text-white px-4 py-2 rounded font-semibold">
                                Register
                            </button>
                        </Link>


                    </div>
                    }

                </div>
            )}
        </div>
    );
};

export default Navbar;