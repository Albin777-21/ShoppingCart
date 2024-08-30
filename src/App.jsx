import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/productList";
import ProductDetails from "./pages/productDetails";
import CartList from "./pages/cartList";
import NotFoundPage from "./pages/notFound";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="products" element={<ProductList />} />
        <Route path="product-details/:id" element={<ProductDetails/>}/>
        <Route path="cart" element={<CartList/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
