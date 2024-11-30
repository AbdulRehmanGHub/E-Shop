import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import Search from "./components/Search";
import Cart from "./components/Cart";
import { techProducts } from "./components/Data";
import { useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [data, setData] = useState([...techProducts]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router basename="/E-Shop">
        <Header setData={setData} cart={cart} />
        <Routes>
          <Route path="/" element={<Main techProducts={data} cart={cart} setCart={setCart} />} />
          <Route path="/product/:id" element={<ProductPage cart={cart} setCart={setCart} />} />
          <Route path="/search/:term" element={<Search cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>

        {
          <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        }

      </Router>
    </>
  );
};

export default App;
