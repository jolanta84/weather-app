import React from "react";
import { Temperature } from "../../models/types";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableHead } from "@mui/material";
import { Table } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableContainer } from "@mui/material";
import { Paper } from "@mui/material";

const WeatherDetails: React.FC<{ temperatureData: Temperature }> = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, border: "1px solid grey" }}
        aria-label="temperature table"
      >
        <TableHead sx={{ bgcolor: "secondary.main" }}>
          <TableRow>
            <TableCell>Temperatura</TableCell>
            <TableCell>Temperatura odczuwalna</TableCell>
            <TableCell>Wilgotność</TableCell>
            <TableCell>Temperatura maksymalna</TableCell>
            <TableCell>Temperatura minimalna</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">
              {Math.ceil(Number(props.temperatureData.temp))} ℃
            </TableCell>
            <TableCell align="center">
              {Math.ceil(Number(props.temperatureData.feels_like))} ℃
            </TableCell>
            <TableCell align="center">
              {props.temperatureData.humidity}%
            </TableCell>
            <TableCell align="center">
              {Math.ceil(Number(props.temperatureData.temp_max))} ℃
            </TableCell>
            <TableCell align="center">
              {Math.ceil(Number(props.temperatureData.temp_min))} ℃
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeatherDetails;
