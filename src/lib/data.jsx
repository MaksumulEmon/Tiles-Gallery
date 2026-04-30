export const FeaturedTiles = async () => {
    const res = await fetch("https://tiles-gallery-three.vercel.app/data.json", {
        cache: "no-store"
    })
    const tiles = await res.json();
    return tiles;
}
  
//     export async function getPhotos() {
//     const res = await fetch("https://pixgen-fawn.vercel.app/data.json");
//     const photos = await res.json();
//     return photos;
// }
