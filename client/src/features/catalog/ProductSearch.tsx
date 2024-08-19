import { debounce, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { setProductParams } from "./catalogSlice";
import { useState } from "react";

function ProductSearch() {
  const { productParams } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const debouncedSearch = debounce((event: any) => {
        dispatch(setProductParams({ searchTerm: event.target.value }))
    }, 1000)

  return (
    <TextField
      label="Search products"
      variant="outlined"
      fullWidth
      value={searchTerm || ''}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange={(event: any) => {
        setSearchTerm(event.target.value);
        debouncedSearch(event);
      }
      }
    />
  );
}

export default ProductSearch;
