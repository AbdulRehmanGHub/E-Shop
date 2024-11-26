import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = ({ techProducts, cart, setCart }) => {
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
      <div className="Cards flex justify-center items-center gap-8 flex-wrap py-4 px-2">
        {techProducts.map((product) => {
          return (
            <>
              <div
                key={product.id}
                className="card relative bg-slate-300 border-2 border-white rounded-lg min-h-[300px] w-[220px] shadow-xl"
              >
                <div className="absolute bg-purple-800 hover:bg-purple-900 top-[-4%] left-[-6%] px-1 py-0 rounded">
                  {product.category}
                </div>
                <Link to={`/product/${product.id}`}>
                  <div className="Product-img">
                    <img
                      src={product.imgSrc}
                      alt={product.name}
                      className="w-full h-[180px] object-cover"
                    />
                  </div>
                </Link>
                <div className="Product-text px-2 py-1 text-slate-900">
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p>
                    {product.brand}{" "}
                    <span className="text-rose-900">{product.model}</span>
                  </p>
                </div>

                <div className="Product-price flex justify-around items-center px-2 text-slate-900">
                  <span className="font-semibold text-xl">
                    {"Rs."}
                    {product.salePrice.toLocaleString()}{" "}
                  </span>
                  <span className="line-through text-lg">
                    {product.price.toLocaleString()}
                  </span>
                </div>

                <div className="Product-btns flex justify-between items-center px-2 pt-3 pb-1">
                  <Link to={`/product/${product.id}`}>
                    <button className="bg-slate-900 hover:bg-slate-950 font-medium py-1 px-3 rounded">
                      View
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
            </>
          );
        })}
      </div>
    </>
  );
};

export default Main;
