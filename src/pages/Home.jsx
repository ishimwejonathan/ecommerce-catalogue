import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import FilterPanel from "../components/FilterPanel";
import SortDropdown from "../components/SortDropdown";

const Home = ({ onAddToCart }) => {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  let filtered = [...products];

  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "low") {
    filtered.sort((a,b)=>a.price-b.price);
  }

  if (sort === "high") {
    filtered.sort((a,b)=>b.price-a.price);
  }

  if (sort === "rating") {
    filtered.sort((a,b)=>b.rating.rate-a.rating.rate);
  }

  return (

    <div className="container">

      <div className="catalogue-layout">

        <FilterPanel setCategory={setCategory} />

        <div className="products-area">

          <SortDropdown setSort={setSort} />

          <div className="products-grid">

            {filtered.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}

          </div>

        </div>

      </div>

    </div>

  );
};

export default Home;