import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useFetchProducts } from "../hooks/useFetch";

export default function Shop() {
  const { cart, setCart } = useOutletContext();
  
  const { products, loading } = useFetchProducts();

  if (loading) return <h2 className="loading">Loading premium items...</h2>;

  return (
    <div className="shop-page">
      <h2>Premium Collection</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            cart={cart} 
            setCart={setCart} 
          />
        ))}
      </div>
    </div>
  );
}