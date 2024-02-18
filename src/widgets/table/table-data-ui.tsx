import { Box, CircularProgress, Typography } from "@mui/material";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetUsers } from "../../hooks/useGetUsers";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    minWidth: 200,
    editable: false,
  },
  {
    field: "username",
    headerName: "Username",
    minWidth: 200,
    editable: false,
  },
  {
    field: "email",
    headerName: "E-mail",
    type: "number",
    minWidth: 220,
    editable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    minWidth: 220,
    editable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "website",
    headerName: "Website",
    type: "number",
    headerAlign: "left",
    align: "left",
    flex: 1,
    minWidth: 150,
    editable: false,
  },
];

export const UserDataList = () => {
  const { data, isPending, isLoaded, isError, error } = useGetUsers();

  return (
    <Box>
      <Typography variant="title" component="h1" sx={{ my: 5 }}>
        Users data list
      </Typography>
      {isPending && <CircularProgress />}
      {isLoaded && (
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      )}
      {isError && (
        <Typography variant="h6" component="span">
          {error}
        </Typography>
      )}
    </Box>
  );
};
