import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";

const ReusableTable = ({ columns, rows, onRowSelect, renderActions }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow className="bg-gray-200">
            {columns.map((column, index) => (
              <TableCell key={index} className="font-bold">
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>
                <div className="flex items-center">
                  <Checkbox
                    checked={row.selected || false}
                    onChange={() => onRowSelect(row.id)}
                  />
                  <span className="ml-2">{index + 1}</span>
                </div>
              </TableCell>
              {Object.keys(row.data).map((key, idx) => (
                <TableCell key={idx}>{row.data[key]}</TableCell>
              ))}
              <TableCell>{renderActions(row)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReusableTable;
