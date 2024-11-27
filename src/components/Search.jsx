import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { techProducts } from "./Data";
import Main from "./Main";

const Search = ({ cart, setCart }) => {
  // console.log(useParams());
  const { term } = useParams();
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const searchedData = () => {
      const data = techProducts.filter((p) =>
        p.name.toLowerCase().includes(term.toLowerCase())
      );
      // console.log(data);
      setSearchData(data);
    };
    searchedData();
  }, [term]);

  return <Main techProducts={searchData} cart={cart} setCart={setCart} />;
};

export default Search;
