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
import { Header, SampleData } from "./types/commonTypes";


interface TableComponentProps {
    data: SampleData;
    columns: Header[];
}

const TableComponent: React.FC<TableComponentProps> = ({ data, columns }) => {
    return (
        <>
            {/* <div>
                {columns.map((column, index) => (
                    <div key={index}>
                        <h2>
                            {`${column.fieldName}`}
                        </h2>
                    </div>
                ))}
            </div> */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell key="rowIndex">Row</TableCell>
                            {columns.map((header) => (
                                <TableCell key={header.fieldName}>{header.fieldName}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.rows.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                <TableCell key={rowIndex+1}>{rowIndex+1}</TableCell>
                                {columns.map((header) => (
                                    <TableCell key={header.fieldName}>
                                        {row[header.fieldName]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default TableComponent;
