export async function getProductList(url) {
  const searchTerm = new URLSearchParams(url).get("q");

  const data = await fetch(
    `https://dummyjson.com/products/search?q=${searchTerm || ""}`
  );
  return data;
}
export async function getFeaturedProduct() {
  const data = await fetch(
    "https://dummyjson.com/products?limit=3&skip=0&select=title,price,description,images,rating"
  );
  return data;
}
