import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  );
}

export default Catalog;
