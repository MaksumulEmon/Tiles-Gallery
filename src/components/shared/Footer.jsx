import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#EBEDF4] mt-10 border-t border-gray-300">
            <div className="mx-6 md:mx-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 ">


                <div className="flex flex-col justify-center ">
                    <h2 className="text-2xl font-extrabold">
                        Tiles <span className="text-[#4ED7F1]">Gallery</span>
                    </h2>
                    <p className="text-gray-600 mt-3 text-sm">
                        Beautiful tiles collection gallery website. Explore modern designs and inspiration.
                    </p>
                </div>


                <div className="flex flex-col justify-center lg:items-center">
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="flex flex-col gap-2 text-gray-700">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/tiles">All Tiles</Link></li>
                        <li><Link href="/myprofile">My Profile</Link></li>
                        <li><Link href="/login">Login</Link></li>
                    </ul>
                </div>


                <div className="flex flex-col justify-center lg:items-center">
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <p className="text-gray-700 text-sm">Email: support@tilesgallery.com</p>
                    <p className="text-gray-700 text-sm mt-1">Phone: +880 1XXXXXXXXX</p>
                    <p className="text-gray-700 text-sm mt-1">Location: Bangladesh</p>
                </div>

            </div>

            <div className="text-center py-4 border-t border-gray-300 text-sm text-gray-600">
                © {new Date().getFullYear()} Tiles Gallery. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;