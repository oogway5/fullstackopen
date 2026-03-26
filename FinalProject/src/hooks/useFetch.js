import { useEffect, useState } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?limit=12&offset=0")
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          thumbnail: item.images[0] 
        }));
        
        setProducts(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return { products, loading };
};