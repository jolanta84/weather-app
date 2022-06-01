import React from "react";
import { Temperature } from "../../models/types";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Fade from "@mui/material/Fade";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";



const WeatherDetails: React.FC<{ temperatureData: Temperature }> = (props) => {

  
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650, border: "1px solid grey"}} aria-label="simple table">
      <TableHead    sx={{ bgcolor: "primary.main" }}>
        <TableRow>
          <TableCell>Temeratura</TableCell>
          <TableCell>Temperatura odczuwalna</TableCell>
          <TableCell>Wilgotność</TableCell>
          <TableCell>Temperatura maksymalna</TableCell>
          <TableCell>Temperatura minimalna</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="center">{props.temperatureData.temp} ℃</TableCell>
          <TableCell align="center">{props.temperatureData.feels_like} ℃</TableCell>
          <TableCell align="center">{props.temperatureData.humidity}%</TableCell>
          <TableCell align="center">{props.temperatureData.temp_max} ℃</TableCell>
          <TableCell align="center">{props.temperatureData.temp_min} ℃</TableCell>
         

          
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default WeatherDetails;
