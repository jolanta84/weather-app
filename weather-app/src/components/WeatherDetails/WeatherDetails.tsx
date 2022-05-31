
import React from "react";
import { Temperature } from "../../models/types";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Fade from "@mui/material/Fade";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const WeatherDetails: React.FC<{temperatureData: Temperature}> = (props) => {
  return (
    <Fade in={true} timeout={2000}>
    <TableContainer component={Paper}>
    <Table sx={{ width: 400 }} aria-label="temperature data table">
<TableBody>
  <StyledTableRow>
    <TableHead >Temperatura</TableHead>
    <StyledTableCell>{props.temperatureData.temp}℃</StyledTableCell>
  </StyledTableRow>
  <TableRow>
    <TableHead>Temperatura odczuwalna</TableHead>
    <StyledTableCell>{props.temperatureData.feels_like}</StyledTableCell>
  </TableRow>
  <StyledTableRow>
    <TableHead>Wilgotność</TableHead>
    <StyledTableCell>{props.temperatureData.humidity} %</StyledTableCell>
  </StyledTableRow> <StyledTableRow>
    <TableHead>Temperatura maksymalna</TableHead>
    <StyledTableCell>{props.temperatureData.temp_max}℃</StyledTableCell>
  </StyledTableRow>
  <StyledTableRow>
    <TableHead>Temperatura minimalna</TableHead>
    <StyledTableCell>
    {props.temperatureData.temp_min}℃</StyledTableCell>
  </StyledTableRow>
</TableBody>
</Table></TableContainer></Fade>
  );
};

export default WeatherDetails;


