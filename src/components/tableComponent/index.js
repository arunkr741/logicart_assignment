import React, {useEffect, useState} from "react";
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
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedSegmentState } from "../../Atoms";

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
  const [selectedSegment, setSelectedSegment] = useRecoilState(selectedSegmentState)

const setOpacity = (elements, opacityValue) => {
  if(!elements || !elements.length) return
  for(let i=0; i<elements.length ;i++){
    elements[i].style.opacity = opacityValue;
  }
};

  useEffect(()=>{
    const bookedElements = document.querySelectorAll('.Booked');
    const transitElements = document.querySelectorAll('.Transit');
    const ofdElements = document.querySelectorAll('.OFD');
    const successElements = document.querySelectorAll('.Success');
    if(selectedSegment){
      const selectedSegmentElements = document.querySelectorAll(`.${selectedSegment}`);
     
      setOpacity(bookedElements, '0.2');
      setOpacity(transitElements, '0.2');
      setOpacity(ofdElements, '0.2');
      setOpacity(successElements, '0.2');
      setOpacity(selectedSegmentElements,1)
    }
    else{
      setOpacity(bookedElements, 1);
      setOpacity(transitElements, 1);
      setOpacity(ofdElements, 1);
      setOpacity(successElements, 1);
    }
  }, [selectedSegment])


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
            <StyledTableRow className={row.status} >
              <StyledTableCell align="center">{row.docket}</StyledTableCell>
              <StyledTableCell align="center">{row.from}</StyledTableCell>
              <StyledTableCell align="center">{row.to}</StyledTableCell>
              <StyledTableCell align="center"> <ConsignmentStatus status={row.status}/></StyledTableCell>
              <StyledTableCell align="center"><Link to={"/docket_details"} ><ActionIcon/></Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
