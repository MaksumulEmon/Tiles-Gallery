import { Avatar, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const FeaturedCard = ({ tile }) => {
    console.log(tile)
    return (

        <Card className="">
            <div className='relative w-full aspect-square'>
                <Image
                    alt="Indie Hackers community"
                    className="   text-center  rounded object-cover "
                    loading="lazy"
                    src={tile.image}
                    // width={268} height={335}
                    fill
                    sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,  33vw"
                />
                <p className=' '>{tile.category}</p>
            </div>


        </Card>


    );
};

export default FeaturedCard;