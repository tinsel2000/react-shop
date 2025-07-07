
const getShopData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", { mode: "cors" });
    const data = await response.json();
    const productsWithQuantity = data.map((item) => ({
      ...item,
      quantity: 0,
    }));
    return productsWithQuantity;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getShopData;