import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import Search from "./components/Search";
import Cart from "./components/Cart";
import { techProducts } from "./components/Data";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([...techProducts]);
  return (
    <>
      <Router basename="/E-Shop">
        <Header setData={setData} />
        <Routes>
          <Route path="/" element={<Main techProducts={data} />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/search/:term" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
