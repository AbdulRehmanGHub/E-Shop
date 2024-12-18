import { Link } from "react-router-dom";
const Cart = ({ cart, setCart }) => {
  window.scroll(0, 0);

  return (
    <div className="Cart flex items-center justify-center px-2">
      <div className="font-sans max-w-4xl max-md:max-w-xl mx-auto py-2">
        <h2 className="text-xl font-bold text-neutral-800">Your Cart</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-3">
          <div className="md:col-span-2 space-y-2">
            {cart.length === 0 ? (
              <h2 className="text-neutral-700">
                Cart is Empty. You have not selected any item yet!
              </h2>
            ) : (
              cart.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-wrap gap-2 bg-slate-200 px-2 py-4 md:flex md:gap-4 md:px-4 md:py-6 rounded-md shadow-lg hover:shadow-xl"
                >
                  <div className="flex gap-4">
                    <div className="w-28 min-h-20 max-sm:w-24 max-sm:h-24 shrink-0">
                      <img
                        src={product.imgSrc}
                        className="w-full h-full object-contain"
                        alt={product.name}
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="text-base font-bold text-neutral-800">
                          {product.name}
                        </h3>
                        <p className="text-sm font-semibold text-neutral-600 mt-2 flex items-center gap-2">
                          <span className="inline-block h-5 text-sm font-thin">
                            Desc: {product.description}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="ml-auto flex flex-col">
                    <h3 className="text-base font-medium text-neutral-800 mt-auto">
                      Rs.{product.salePrice.toLocaleString()}
                    </h3>
                  </div>
                </div>
              ))
            )}
          </div>

          <div>
            <div className="bg-slate-200 rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
              <ul className="text-neutral-800 space-y-4">
                <li className="flex flex-wrap gap-4 text-sm">
                  Subtotal <span className="ml-auto font-bold">Rs.2000.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Shipping <span className="ml-auto font-bold">Rs.300.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Tax <span className="ml-auto font-bold">Rs.99.00</span>
                </li>
                <hr className="border-gray-300" />
                <li className="flex flex-wrap gap-4 text-sm font-bold">
                  Total <span className="ml-auto">Rs.2399.00</span>
                </li>
              </ul>

              <div className="mt-8 space-y-2">
                <button
                  type="button"
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-neutral-800 hover:bg-neutral-900 text-white rounded-md"
                >
                  Buy Now
                </button>
                <Link to={"/"}>
                  <button
                    type="button"
                    className="text-sm mt-2 px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-neutral-800 border border-neutral-400 rounded-md"
                  >
                    Continue Shopping{" "}
                  </button>
                </Link>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                <img
                  src="https://pngimg.com/d/bank_PNG3.png"
                  alt="card1"
                  className="w-10 object-contain"
                />
                <img
                  src="https://pngimg.com/d/mastercard_PNG25.png"
                  alt="card2"
                  className="w-10 object-contain"
                />
                <img
                  src="https://vectorseek.com/wp-content/uploads/2020/12/2009-logo-300x190.png"
                  alt="card3"
                  className="w-10 object-contain"
                />
                <img
                  src="https://seeklogo.com/images/J/jazz-cash-logo-829841352F-seeklogo.com.png"
                  alt="card3"
                  className="w-10 object-contain"
                />
              </div>
            </div>

            {cart.length != 0 && (
              <div className="border-1 border-neutral-800 rounded-md  w-full px-4 py-2 my-3 h-max shadow-xl">
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-neutral-800 hover:bg-neutral-900 rounded-md"
                  >
                    Checkout
                  </button>
                  <button
                    onClick={() => setCart("")}
                    type="button"
                    className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-neutral-800 border border-neutral-400 rounded-md"
                  >
                    Clear Cart{" "}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
