import { Button, Card, CloseButton } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id)
    const res = await fetch("https://tiles-gallery-three.vercel.app/data.json")
    const tiles = await res.json();


    const tile = tiles.find(t => t.id == id)

    // console.log(tile);
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-0 pt-4">

            <div className="bg-white shadow-xl rounded-2xl overflow-hidden ">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">


                    <div className="relative w-full aspect-square">
                        <Image
                            src={tile.image}
                            alt={tile.title}
                            fill
                            sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw, 33vw"
                            className=" rounded object-cover "
                        />
                    </div>



                    <div className="p-6 space-y-4 ">

                        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">
                            {tile.title}
                        </h1>

                        <p className="text-gray-500 text-2xl font-semibold">
                            Category: <span className="font-medium  text-gray-700">{tile.category}</span>
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            {tile.description}
                        </p>

                        <div className="flex justify-between ">

                            <div className="bg-gray-100 p-3 rounded-lg ">
                            
                                <p className="font-semibold text-gray-800">Price: {tile.price} $</p>
                                <p className="font-semibold text-gray-800">Curenct: {tile.currency} </p>
                                <p className="font-semibold text-gray-800">Material: {tile.material} </p>
                                <p className='font-semibold text-gray-800'>Sizes:{tile.dimensions}</p>
                            </div>

                            <div className='flex items-center'>
                                <p className={`px-3 py-1 rounded-xl text-white font-semibold ${tile.inStock ? "bg-[#79AE6F] " : "bg-[#AE2448]"}`}>   {tile.inStock ? "Available Stock" : "Out of Stock"}</p>
                            </div>



                        </div>

                        <Button variant='tertiary' className="mt-4 w-full bg-black  text-white hover:bg-gray-300 hover:text-black py-3 rounded-xl transition">
                            Buy Now
                        </Button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailsPage;