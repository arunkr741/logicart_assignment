import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ActionIcon from "../../Assets/actionIcon";
import { ConsignmentStatus } from "./consignmentStatus";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#A9DCF6",
    color: "#000",
    fontSize: 12,
    fontWeight: "bold"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: '#D9D9D9',
  },
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

function createData(docket, from, to, status) {
  return { docket, from, to, status };
}

const rows = [
  createData("L123456789", "BLR", "KER", "Booked"),
  createData("L123456789", "BLR", "KER", "Booked"),
  createData("L123456789", "BLR", "KER", "Transit"),
  createData("L123456789", "BLR", "KER", "OFD"),
  createData("L123456789", "BLR", "KER", "Success"),
];

export default function CustomTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Docket No</StyledTableCell>
            <StyledTableCell align="center">From</StyledTableCell>
            <StyledTableCell align="center">To</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow >
              <StyledTableCell align="center">{row.docket}</StyledTableCell>
              <StyledTableCell align="center">{row.from}</StyledTableCell>
              <StyledTableCell align="center">{row.to}</StyledTableCell>
              <StyledTableCell align="center"> <ConsignmentStatus status={row.status}/></StyledTableCell>
              <StyledTableCell align="center"><ActionIcon/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
