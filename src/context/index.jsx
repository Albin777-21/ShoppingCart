//create the context
//provide the state to context
//wrap context in root component
//consume the context using useContext

import { createContext, useEffect, useState } from "react";
import ProductDetails from "../pages/productDetails";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const[ProductDetails, setProuductDetails] = useState(null);

  async function fetchProductList() {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const result = await apiResponse.json();

    console.log(result);
    if (result && result?.products) {
      setProductList(result?.products);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProductList();
  }, []);
  return (
    <ShoppingCartContext.Provider value={{ productList, loading ,setLoading,ProductDetails,setProuductDetails}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
