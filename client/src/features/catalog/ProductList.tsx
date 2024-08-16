import { Product } from "../../app/models/product";
import { List } from "@mui/material";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

function ProductList({ products }: Props) {
  return (
    <>
      <List>
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </List>
    </>
  );
}

export default ProductList;
