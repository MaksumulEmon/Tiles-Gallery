
"use client";

import Image from 'next/image';
import React from 'react';
import banner from '@/assets/banner.jpg';
import banner2 from '@/assets/banner2.jpg';
import banner3 from '@/assets/banner3.jpg';
import banner4 from '@/assets/banner4.jpg';
import banner5 from '@/assets/banner5.jpg';
import banner6 from '@/assets/banner6.jpg';
import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
    return (

        <section className="max-w-7xl mx-auto relative h-[60vh] lg:h-217 w-full overflow-hidden flex items-center px-6 lg:px-16 lg:mt-5 rounded-2xl">


            <div className="absolute inset-0 z-0">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="w-full h-full"
                    grabCursor={true}
                    touchEventsTarget="container"
                >
                    <SwiperSlide className="w-full h-full">
                        <Image
                            src={banner}
                            alt="banner"
                            fill
                            className="object-cover"
                            priority
                        />
                    </SwiperSlide>

                    <SwiperSlide className="w-full h-full">
                        <Image src={banner2} alt="banner" fill className="object-cover" />
                    </SwiperSlide>

                    <SwiperSlide className="w-full h-full">
                        <Image src={banner3} alt="banner" fill className="object-cover" />
                    </SwiperSlide>

                    <SwiperSlide className="w-full h-full">
                        <Image src={banner4} alt="banner" fill className="object-cover" />
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full">
                        <Image src={banner5} alt="banner" fill className="object-cover" />
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full">
                        <Image src={banner6} alt="banner" fill className="object-cover" />
                    </SwiperSlide>
                </Swiper>

                <div className="absolute inset-0 bg-black/40"></div>
            </div>


            <div className="relative z-10 max-w-2xl text-white">

                <h1 className="font-bold text-3xl sm:text-4xl lg:text-7xl mb-6 drop-shadow-md">
                    Discover Your Perfect Aesthetic
                </h1>

                <p className="text-sm sm:text-base lg:text-xl mb-10 text-white max-w-lg leading-relaxed">
                    Curated architectural surfaces for the modern visionary. Explore our gallery of premium porcelain, marble, and handcrafted ceramics.
                </p>

                <Link href={'/alltiles'}>
                    <button className="bg-white text-black px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-2xl cursor-pointer hover:bg-neutral-400 transition-colors duration-300">
                        Browse Now
                    </button>
                </Link>

            </div>

        </section>
    );
};

export default Banner;