export const FeaturedTiles = async () => {
    const res = await fetch("https://tiles-gallery-three.vercel.app/data.json", {
        cache: "no-store"
    })
    const tiles = await res.json();
}
    // const FeaturedTiles = async () => {
    //     const res = await fetch("https://tiles-gallery-three.vercel.app/data.json", {
    //         cache: "no-store"
    //     })
    //     const tiles = await res.json();