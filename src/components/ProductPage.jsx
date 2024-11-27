import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { techProducts } from "./Data";
import Main from "./Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPage = ({ cart, setCart }) => {
  const addToCart = (
    category,
    id,
    name,
    description,
    model,
    brand,
    price,
    salePrice,
    buyLink,
    imgSrc
  ) => {
    const obj = {
      category,
      id,
      name,
      description,
      model,
      brand,
      price,
      salePrice,
      buyLink,
      imgSrc,
    };
    setCart([...cart, obj]);
    // console.log("Cart elem = ", cart);
    toast.success("Item added to Cart.", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const { id } = useParams();
  // console.log(`Prdouct Page = ${id}`);

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const showProduct = techProducts.filter((p) => p.id == id);
    // console.log(showProduct);
    setProduct(showProduct[0]);

    const relProducts = techProducts.filter(
      (prod) => prod.category === product.category
    );
    // move/keep the scrollbar to top after every render
    window.scrollTo(0, 0);

    setRelatedProducts(relProducts);
  }, [id, product.category]);

  return (
    <>
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
      <div className="Product-details my-8">
        <div className="flex justify-evenly items-start flex-wrap gap-2">
          <div className="P-img w-[45%] h-[460px] bg-white">
            <img
              src={product.imgSrc}
              alt={product.name}
              className="w-full h-full"
            />
          </div>

          <div className="P-img w-[30%] h-[460px]">
            <div className="Product-text px-2 py-1 flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Name: {product.name}</h2>
              <p className="text-sm">Description: {product.description}</p>
              <p>
                Brand: {product.brand} &nbsp; &nbsp; &nbsp;{" "}
                <span>Model: {product.model}</span>
              </p>
            </div>

            <div className="Product-price px-2 flex flex-col gap-2">
              <p className="text-lg">
                Price:{" "}
                <span className="line-through ">
                  {product.price?.toLocaleString()}
                </span>
              </p>
              <p className="font-semibold text-lg text-emerald-400">
                Sale Price: {product.salePrice?.toLocaleString()} {"PKR"}
              </p>
            </div>

            <div className="Product-btns flex gap-4 items-center px-2 pt-3 pb-1">
              <Link to={`/product/${product.id}`}>
                <button className="bg-slate-900 hover:bg-slate-950 font-medium py-1 px-3 rounded">
                  Buy Now
                </button>
              </Link>
              <button
                onClick={() =>
                  addToCart(
                    product.category,
                    product.id,
                    product.name,
                    product.description,
                    product.model,
                    product.brand,
                    product.price,
                    product.salePrice,
                    product.buyLink,
                    product.imgSrc
                  )
                }
                className="bg-slate-900 hover:bg-slate-950 font-medium py-1 px-3 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="Related-products flex flex-col px-12 py-8">
        <h2 className="text-lg font-semibold">Related Products</h2>
        <Main techProducts={relatedProducts} cart={cart} setCart={setCart} />
      </div>
    </>
  );
};

export default ProductPage;
