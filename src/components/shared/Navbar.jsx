// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import logo from "@/assets/logo.jpg";
// import Mynavlink from "./Mynavlink";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";

// const Navbar = () => {
//     const [open, setOpen] = useState(false);

//     return (
//         <div className="bg-[#EBEDF4] relative">
//             <div className="mx-6 md:mx-20 flex justify-between items-center py-3">

//                 {/* Logo */}
//                 <div className="flex items-center text-2xl md:text-3xl gap-2">
//                     <span className="font-extrabold">Tiles</span>
//                     <span className="font-bold text-[#4ED7F1]">Gallery</span>
//                 </div>

//                 {/* Desktop Menu */}
//                 <ul className="hidden md:flex items-center gap-6">
//                     <li><Mynavlink href="/">Home</Mynavlink></li>
//                     <li><Mynavlink href="/tiles">All Tiles</Mynavlink></li>
//                     <li><Mynavlink href="/myprofile">My Profile</Mynavlink></li>
//                 </ul>

//                 {/* Right Side */}
//                 <div className="flex items-center gap-3">

//                     <Image
//                         src={logo}
//                         alt="logo"
//                         width={40}
//                         height={40}
//                         className="rounded-full"
//                     />

//                     {/* Toggle Button */}
//                     <button
//                         className="md:hidden text-3xl"
//                         onClick={() => setOpen(!open)}
//                     >
//                         {open ? <RxCross2 />  : <GiHamburgerMenu />}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {open && (
//                 <div className="md:hidden bg-[#EBEDF4] px-6 pb-4 flex flex-col gap-3">
//                     <Mynavlink href="/" onClick={() => setOpen(false)}>Home</Mynavlink>
//                     <Mynavlink href="/tiles" onClick={() => setOpen(false)}>All Tiles</Mynavlink>
//                     <Mynavlink href="/myprofile" onClick={() => setOpen(false)}>My Profile</Mynavlink>

//                     <Link href="/login">
//                         <button className="mt-2 bg-[#4ED7F1] text-white px-4 py-2 rounded">
//                             Login
//                         </button>
//                     </Link>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Navbar;







"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/logo.jpg";
import Mynavlink from "./Mynavlink";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-[#FAFAF9] relative border-2 border-b border-[#E7E5E4]">
            <div className="mx-6 md:mx-20 flex justify-between items-center py-3">

                {/* Logo */}
                <div className=" items-center text-2xl md:text-2xl gap-2 font-bold text-[#171717]">
                    
                    <p>Tiles  Gallery</p>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6">
                    <li><Mynavlink href="/">Home</Mynavlink></li>
                    <li><Mynavlink href="/alltiles">All Tiles</Mynavlink></li>
                    <li><Mynavlink href="/myprofile">My Profile</Mynavlink></li>
                </ul>

                {/* Right Side */}
                <div className="flex items-center gap-3">

                    {/* Login button (DESKTOP ONLY) */}
                    <Link href="/login" className="hidden md:block">
                        <button className="bg-[#171717] text-white px-4 py-2 rounded font-semibold">
                            Login
                        </button>
                    </Link>

                    {/* Profile Image */}
                    <Image
                        src={logo}
                        alt="logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />

                    {/* Hamburger (MOBILE ONLY) */}
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

                    {/* Login button (MOBILE ONLY) */}
                    <Link href="/login">
                        <button className="mt-2 bg-[#171717] text-white px-4 py-2 rounded font-semibold">
                            Login
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;