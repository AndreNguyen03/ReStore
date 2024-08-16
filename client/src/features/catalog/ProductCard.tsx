import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  return (
    <>
      <ListItem key={product.id}>
        <ListItemAvatar>
          <Avatar src={product.pictureUrl}></Avatar>
        </ListItemAvatar>
        <ListItemText>
          {product.name} - {product.price}
        </ListItemText>
      </ListItem>
    </>
  );
}

export default ProductCard;
