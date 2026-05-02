import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white px-4">

            <div className="absolute inset-0  from-zinc-900/50 via-black to-black pointer-events-none" />

            <div className="text-center relative z-10">

   
                <h1 className="text-[12rem] md:text-[16rem] font-light leading-none tracking-tighter text-zinc-800/40 select-none">
                    404
                </h1>

                <div className="-mt-12 md:-mt-20">
                    <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase mb-4">
                        Page Not Found
                    </h2>

                    <p className="text-zinc-500 mb-10 max-w-sm mx-auto text-sm leading-relaxed tracking-wide">
                        The requested resource is unavailable or has been permanently moved from the studio directory.
                    </p>

                    <Link href="/">
                        <button className="group relative px-10 py-4 overflow-hidden border border-zinc-800 rounded-full transition-all hover:border-white">
                            <span className="relative z-10 text-xs uppercase tracking-[0.3em] group-hover:text-black transition-colors duration-300">
                                Return to Studio
                            </span>
                            <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;