export const getProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    if (!response.ok) throw new Error("Failed to fetch category products");
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
