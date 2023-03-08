import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import { StyledTableCell, StyledTableRow } from './styles';
import { TableBottom } from './table-footer';

type CustomTableProps = {
  rows: any[];
  columns: any[];
  totalRows: number;
  page: number;
  loading?: boolean;
  rowsPerPage: number;
  handleChangeOptions: (
    type: 'page' | 'rowsPerPage',
    newValue: string
  ) => void;
}

type CustomTableState = {
  emptyRows: number;
}

export class CustomTable extends React.Component<CustomTableProps, CustomTableState> {
  constructor(props: CustomTableProps) {
    super(props);
    this.state = {
      emptyRows: this.getEmptyRows(this.props.page, this.props.totalRows, this.props.rowsPerPage),
    };
  }

  componentDidUpdate(prevProps: CustomTableProps) {
    if (prevProps.page !== this.props.page || prevProps.totalRows !== this.props.totalRows || prevProps.rowsPerPage !== this.props.rowsPerPage) {
      this.setState({
        emptyRows: this.getEmptyRows(this.props.page, this.props.totalRows, this.props.rowsPerPage),
      });
    }
  }

  getEmptyRows(page: number, totalRows: number, rowsPerPage: number) {
    return page > 0 ? Math.max(0, (1 + page) * rowsPerPage - totalRows) : 0;
  }

  render() {
    const { rows, columns, totalRows, rowsPerPage = 10, page = 1, loading = false, handleChangeOptions } = this.props;
    const { emptyRows } = this.state;

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((col, i) =>
                <StyledTableCell key={col.name} align={i === 0 ? undefined : 'right'}>{col.name}</StyledTableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ?
              [...Array(rowsPerPage)].map((r, i) => (
                <StyledTableRow key={i}>
                  {columns.map((col, j) =>
                    <StyledTableCell key={col.name + j}>
                      <Skeleton />
                    </StyledTableCell>
                  )}
                </StyledTableRow>
              ))
              :
              rows.map(row => (
                <StyledTableRow key={row.id}>
                  {columns.map((col, i) =>
                    <StyledTableCell key={col.name + row.id} align={i === 0 ? undefined : 'right'} component={i === 0 ? undefined : "th"} scope={i === 0 ? undefined : "row"}>{row[col.value]}</StyledTableCell>
                  )}
                </StyledTableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableBottom totalRows={totalRows} page={page} rowsPerPage={rowsPerPage} handleChangeOptions={handleChangeOptions} />
        </Table>
      </TableContainer>
    );
  }
};