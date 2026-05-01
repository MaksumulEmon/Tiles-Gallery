"use client";
import { useState } from "react";
import FeaturedCard from "@/components/homepage/FeaturedCard";
import { Label, SearchField } from "@heroui/react";

const SearchSection = ({ tiles }) => {
    const [search, setSearch] = useState("");

    const filteredTiles = tiles.filter((tile) =>
        tile.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>

            <div className="pt-6 ">
                <SearchField className=" max-w-sm">

                    <SearchField.Group className="focus-within:ring-1 focus-within:ring-black focus-within:border-black ">
                        <SearchField.SearchIcon />

                        <SearchField.Input
                            className="placeholder:text-black"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search..."
                        />

                        <SearchField.ClearButton onClick={() => setSearch("")} />
                    </SearchField.Group>
                </SearchField>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredTiles.length > 0 ? (
                    filteredTiles.map((tile, index) => (
                        <FeaturedCard key={index} tile={tile} />
                    ))
                ) : (
                    <div className="flex justify-center text-center">
                        <p className=" text-center text-gray-500">
                            No tiles found
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default SearchSection;