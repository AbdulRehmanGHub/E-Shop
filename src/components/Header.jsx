import { Link, useNavigate } from "react-router-dom";
import { techProducts } from "./Data";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartPlus } from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router-dom";

const Header = ({ setData, cart }) => {
  // console.log(useLocation());
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu
  const navigate = useNavigate();
  const filterByCategory = (category) => {
    const element = techProducts.filter(
      (product) => product.category === category
    );
    // console.log(element);
    setData(element);
    window.scroll(0, 0);
  };

  const filterByPrice = (salePrice, condition) => {
    let element;
    if (condition === "greater") {
      element = techProducts.filter(
        (product) => product.salePrice >= salePrice
      );
    } else if (condition === "less") {
      element = techProducts.filter(
        (product) => product.salePrice <= salePrice
      );
    }
    // console.log(element);
    setData(element);
    window.scroll(0, 0);
  };

  const [searchVal, setSearchVal] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${searchVal}`);
    setSearchVal("");
  };

  return (
    <>
      <div className="header sticky top-0 z-10">
        <div className="sm:flex sm:flex-row sm:justify-between sm:items-center bg-neutral-800 sm:px-6 sm:py-4 flex flex-col items-center justify-center gap-2">
          <Link
            to={"./"}
            className="text-2xl flex items-center gap-2 font-bold"
          >
            <img
              className="w-10 h-10"
              src="https://png.pngtree.com/png-vector/20240923/ourmid/pngtree-e-commerce-retail-smartphone---mobile-shopping-store-png-image_13887715.png"
            />
            <span>E-Shop</span>
          </Link>
          <div className="sm:flex sm:items-center sm:justify-between sm:gap-4 flex justify-between gap-2">
            <form
              // onClick={submitHandler}
              onSubmit={submitHandler}
              className="Search"
            >
              <input
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="min-w-[200px] rounded px-1 py-1 outline-none text-black"
                type="text"
                placeholder="Search Items"
              />
            </form>
            <Link
              to={"/cart"}
              className="text-2xl ms-2 pb-1 font-bold relative"
            >
              <FontAwesomeIcon icon={faCartPlus} />
              <span className="absolute top-[-9px] right-0 text-xs text-lime-300">
                {cart.length}
              </span>
            </Link>

            {location.pathname === "/" && (
              <>
                {/* Hamburger Icon */}
                <button
                  className="text-white focus:outline-none sm:hidden ms-4 text-2xl align-text-top"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </>
            )}
          </div>
        </div>

        <div className="border-t border-neutral-700"></div>

        {location.pathname === "/" && (
          <div>
            {/* Filters Section */}
            <div
              className={`filters bg-neutral-800 md:px-2 ${
                menuOpen ? "block" : "hidden"
              } sm:flex sm:flex-row flex flex-col w-full`}
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <span
                className="filter-items w-full text-center hover:bg-neutral-700 cursor-pointer"
                onClick={() => setData(techProducts)}
              >
                View All
              </span>
              <span
                className="filter-items w-full text-center hover:bg-neutral-700 cursor-pointer"
                onClick={() => filterByCategory("Laptops")}
              >
                Laptops
              </span>
              <span
                className="filter-items w-full text-center hover:bg-neutral-700 cursor-pointer"
                onClick={() => filterByCategory("Monitors")}
              >
                Monitors
              </span>
              <span
                className="filter-items w-full text-center hover:bg-neutral-700 cursor-pointer"
                onClick={() => filterByCategory("DVDs")}
              >
                DVDs
              </span>
              <span
                className="filter-items w-full text-center hover:bg-neutral-700 cursor-pointer"
                onClick={() => filterByCategory("Keyboards")}
              >
                Keyboards
              </span>
              <span
                className="filter-items cursor-pointer w-full text-center hover:bg-neutral-700"
                onClick={() => filterByPrice(30000, "less")}
              >
                0-30K
              </span>
              <span
                className="filter-items cursor-pointer w-full text-center hover:bg-neutral-700"
                onClick={() => filterByPrice(30000, "greater")}
              >
                {">"}30K
              </span>
              <span
                className="filter-items cursor-pointer w-full text-center hover:bg-neutral-700"
                onClick={() => filterByPrice(80000, "greater")}
              >
                {">"}80K
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
