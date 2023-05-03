import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Sort from "./Sort";
import Slot from "./Slot";

export default function BasicTable({ centers, onSort }) {
  function createData(name, vaccine, availableCapacity, slots) {
    return { name, vaccine, availableCapacity, slots };
  }

  const rows = centers?.map((center) =>
    createData(
      center.name,
      center.sessions[0].vaccine,
      center.sessions[0].available_capacity,
      center.sessions[0].slots
    )
  );

  return (
    <>
      {centers?.length > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ background: "orange" }}>
              <TableRow>
                <TableCell size="small">No</TableCell>
                <TableCell size="small" align="right">
                  Name
                </TableCell>
                <TableCell size="small" align="right">
                  Vaccine <Sort sortBy="vaccine" onSort={onSort} />
                </TableCell>
                <TableCell size="small" align="right">
                  Available Capacity <Sort sortBy="capacity" onSort={onSort} />
                </TableCell>
                <TableCell size="small" align="right">
                  Slots
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    <div className="serial-number">{id + 1}</div>
                  </TableCell>
                  <TableCell align="right" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.vaccine}</TableCell>
                  <TableCell align="right">{row.availableCapacity}</TableCell>
                  <TableCell align="right">
                    {row.slots.map(({ time }, id) => (
                      <Slot key={id} time={time} />
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
