"use client";

import { useGetUsersQuery } from "@/state/api";
import Header from "@/app/(components)/Header/page";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material";
import { useAppSelector } from "@/app/redux";

const columns: GridColDef[] = [
  { field: "userId", headerName: "ID", width: 150 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
];

const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const muiTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  if (isLoading) return <div className="py-4">Loading...</div>;
  if (isError || !users) {
    return (
      <div className="text-center text-red-500 py-4">Failed to fetch users</div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Users" />
      <ThemeProvider theme={muiTheme}>
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row.userId}
          checkboxSelection
          className="shadow rounded-lg border border-gray-200 mt-5"
        />
      </ThemeProvider>
    </div>
  );
};

export default Users;
