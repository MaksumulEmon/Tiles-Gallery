import { Noto } from '@/app/layout';
import { Avatar, Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedCard = ({ tile }) => {
    // console.log(tile)
    return (

        <Card className="">
            <div className='relative w-full aspect-square'>
                <Image
                    alt="Indie Hackers community"
                    className="  text-center  rounded object-cover "
                    loading="lazy"
                    src={tile.image}
                    // width={268} height={335}
                    fill
                    sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw, 33vw"
                />
                <Chip className=' absolute right-2 top-4 bg-[#E8F5BD] text-black font-bold'>{tile.category}</Chip>
            </div>
            <h2 className={` ${Noto.className} text-lg font-bold text-black`}> {tile.title}</h2>
            <div className='flex justify-between items-center'>
                <p>{tile.dimensions}</p>
                <p className={`px-3 py-1 rounded-xl text-white font-semibold ${tile.inStock ? "bg-[#79AE6F] " : "bg-[#AE2448]"}`}>   {tile.inStock ? "Available Stock" : "Out of Stock"}</p>
            </div>
           <Link href={`/tiles/${tile.id}`}>  <Button variant="tertiary" className="w-full rounded font-bold">View Details</Button></Link>

        </Card>


    );
};

export default FeaturedCard;