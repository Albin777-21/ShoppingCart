import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import ProductTile from "../../component/productTile.jsx";

const ProductList = () => {
  const { productList, loading } = useContext(ShoppingCartContext);

  if (loading)
    return <h2 className="text-green-500">Data is Fetching, please wait!</h2>;

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Featured Products
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
          {productList.map((singleProductTile) => (
            <ProductTile
              key={singleProductTile.id}
              singleProductTile={singleProductTile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
