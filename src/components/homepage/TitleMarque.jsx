import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    { id: "1", title: "New Arrivals: Calacatta Borghini Porcelain" },
    { id: "2", title: "Weekly Feature: Modern Geometric Patterns" },
    { id: "3", title: "Join the Community: Designer Early Access" },
];


const TitleMarque = () => {
    return (
        <div className="group flex items-center border-b border-neutral-200 bg-white py-2">
            <button className="flex items-center gap-3 px-8 text-[11px] font-medium tracking-[0.3em] uppercase text-neutral-900 transition-all ">
                <span className=" w-4 bg-neutral-900"></span>
                Update Collection
            </button>

          
            <Marquee speed={35} pauseOnHover={true} className="overflow-hidden lg:mr-30">
                {news.map((item) => (
                    <div key={item.id} className="flex items-center">
                        <span className="mx-12  text-[12px] font-light italic tracking-widest text-black">
                            {item.title}
                        </span>
                        <span className="text-black">/</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default TitleMarque;