import * as React from "react";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const getUsers = async (empCollectionRef, setRows) => {
  const data = await getDocs(empCollectionRef);
  setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};

export default function Userlist() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState([]);
  const empCollectionRef = collection(db, "Users");

  useEffect(() => {
    getUsers(empCollectionRef, setRows);
  }, [empCollectionRef]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: "20px" }}
      >
       
      </Typography>
      <Divider sx={{ marginBottom: "10px" }} />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                First Name
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Last Name
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Email
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Initial Quiz Result (?/10)
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Final Quiz Result (?/27)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell align="left">{row.firstName}</TableCell>
                    <TableCell align="left">{row.lastName}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.InitialScore}</TableCell>
                    <TableCell align="left">{row.FinalScore}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
