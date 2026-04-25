"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "@/app/(components)/Header/page";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAppSelector } from "../redux";
import { createTheme, ThemeProvider } from "@mui/material";

const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 200 },
  { field: "name", headerName: "Product Name", width: 150 },
  {
    field: "price",
    headerName: "Price",
    width: 150,
    type: "number",
    valueGetter: (value, row) => `$${row.price}`,
  },
  {
    field: "rating",
    headerName: "Rating",
    description: "Product Rating.",
    width: 210,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    width: 250,
    type: "number",
  },
];

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const muiTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <ThemeProvider theme={muiTheme}>
        <DataGrid
          rows={products}
          columns={columns}
          getRowId={(row) => row.productId}
          checkboxSelection
          className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
        />
      </ThemeProvider>
    </div>
  );
};

export default Inventory;
