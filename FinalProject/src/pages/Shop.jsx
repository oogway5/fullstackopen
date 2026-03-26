import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useFetch } from "../hooks/useFetch";

export default function Shop() {
  const { cart, setCart } = useOutletContext();
  
  const { data, loading } = useFetch("https://www.googleapis.com/books/v1/volumes?q=python+programming&maxResults=21");

  if (loading) return <h2 className="loading">Loading premium books...</h2>;

  const products = (data?.items || []).map((item) => ({
    id: item.id,
    title: item.volumeInfo.title,
    price: item.saleInfo?.retailPrice?.amount || 19.99, 
    thumbnail: item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150",
  }));

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