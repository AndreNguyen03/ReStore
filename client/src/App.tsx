import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { name: "product1", price: 100.0 },
    { name: "product2", price: 200.0 },
    { name: "product3", price: 300.0 },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products").then();
  }, []);

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        name: "product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
      },
    ]);
  }

  return (
    <div>
      <h2>Re-Store</h2>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </div>
  );
}

export default App;
