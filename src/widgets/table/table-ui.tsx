import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Box, CircularProgress, Typography } from "@mui/material";

import { useGetUsers } from "../../hooks/useGetUsers";

export const UserList = () => {
  const { data, isPending, isError, error } = useGetUsers();

  return (
    <Box>
      <Typography variant="title" component="h1" sx={{ mb: 5 }}>
        Users list
      </Typography>
      {isPending ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Username</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone</TableCell>
                <TableCell align="left">Website</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isError ? (
                data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.username}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.phone}</TableCell>
                    <TableCell align="left">{row.website}</TableCell>
                  </TableRow>
                ))
              ) : (
                <Typography variant="h6" component="span">
                  {error}
                </Typography>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};
