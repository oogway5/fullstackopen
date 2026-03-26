import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useFetch } from "../hooks/useFetch";

export default function Shop() {
  const { cart, setCart } = useOutletContext();
  
  const { data, loading } = useFetch("https://openlibrary.org/search.json?q=python+programming&limit=12");

  if (loading) return <h2 className="loading">Loading premium books...</h2>;

  const products = (data?.docs || [])
    .filter(book => book.title) 
    .map((book) => ({
      id: book.key,
      title: book.title,
      price: book.first_publish_year ? (book.first_publish_year % 20) + 19.99 : 29.99,
      thumbnail: book.cover_i 
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
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