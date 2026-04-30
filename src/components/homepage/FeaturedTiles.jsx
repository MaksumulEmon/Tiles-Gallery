import React from 'react';
import FeaturedCard from './FeaturedCard';

const FeaturedTiles = async () => {
    const res = await fetch("https://tiles-gallery-three.vercel.app/data.json")
    const tiles = await res.json();
    // console.log(tiles)
    
    return (
        <div className='max-w-7xl mx-auto '>
            <div className='space-y-4 pt-4'>
               <h1 className='text-2xl font-extrabold ml-3 lg:ml-0 '>Featured Tiles</h1>

               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
               {
                tiles.map((tile,index) =>{
                 return  <FeaturedCard key={index} tile={tile}/>
                })
               }
               </div>
            </div>
        </div>
    );
};

export default FeaturedTiles;