import {
  Grid,
  Paper,
} from "@mui/material";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import {
  fetchFilters,
  fetchProductsAsync,
  productSelectors,
  setPageNumber,
  setProductParams,
} from "./catalogSlice";
import ProductList from "./ProductList";
import { useEffect } from "react";
import ProductSearch from "./ProductSearch";
import RadioButtonGroup from "../../app/components/RadioButtonGroup";
import CheckboxButtonGroup from "../../app/components/CheckboxButtonGroup";
import AppPagination from "../../app/components/AppPagination";

const sortOptions = [
  { value: "name", label: "Alphabetical" },
  { value: "priceDesc", label: "Price - High to low" },
  { value: "priceAsc", label: "Price - Low to high" },
];

function Catalog() {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, filtersLoaded, brands,types,productParams ,metaData} = useAppSelector(
    (state) => state.catalog
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [filtersLoaded, dispatch]);

  if (!filtersLoaded || !metaData)
    return <LoadingComponent message="Loading products..." />;
  return (
    <>
      <Grid container columnSpacing={4}>
        <Grid item xs={3}>
          <Paper sx={{ mb: 2 }}>
            <ProductSearch />
           </Paper>
          <Paper sx={{ mb: 2, p: 2 }}>
            <RadioButtonGroup 
              selectedValue={productParams.orderBy}
              options={sortOptions}
              onChange={(e) => dispatch(setProductParams({orderBy: e.target.value}))}
            />
          </Paper>
          <Paper sx={{ mb: 2, p: 2 }}>
            <CheckboxButtonGroup 
              items={brands}
              checked={productParams.brands}
              onChange={(items: string[]) => dispatch(setProductParams({brands:items}))}
            />
          </Paper>
          <Paper sx={{ mb: 2, p: 2 }}>
          <CheckboxButtonGroup 
              items={types}
              checked={productParams.types}
              onChange={(items: string[]) => dispatch(setProductParams({types:items}))}
            />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <ProductList products={products}></ProductList>
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={9}>
          <AppPagination 
            metaData={metaData}
            onPageChange={(page:number) => dispatch(setPageNumber({pageNumber:page}))}
          
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Catalog;
