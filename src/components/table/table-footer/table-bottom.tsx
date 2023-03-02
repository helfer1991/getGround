import React from 'react';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Pagination } from './pagination';

type TableBottomProps = {
    totalRows: number;
    rowsPerPage: number;
    page: number;
    handleChangeOptions: (
      type: 'page' | 'rowsPerPage',
      newValue: string
    ) => void;
}

type TableBottomState = {
  page: number;
  rowsPerPage: number;
}
  
export class TableBottom extends React.Component<TableBottomProps, TableBottomState> {
    constructor(props: TableBottomProps) {
      super(props);
      this.state = {
        page: this.props.page,
        rowsPerPage: this.props.rowsPerPage,
      };
    }
  
    handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      const { handleChangeOptions } = this.props;
      this.setState({ page: newPage });
      handleChangeOptions('page', (newPage + 1).toString());
    }
  
    handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { handleChangeOptions } = this.props;
      const newRowsPerPage = parseInt(event.target.value);
      this.setState({ rowsPerPage: newRowsPerPage });
      handleChangeOptions('rowsPerPage', newRowsPerPage.toString());
    }
  
    render() {
      const { totalRows } = this.props;
      const { page, rowsPerPage } = this.state;
  
      return (
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[20]}
              count={totalRows}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'Table of books',
                },
                native: true,
              }}
              onPageChange={this.handlePageChange}
              onRowsPerPageChange={this.handleRowsPerPageChange}
              ActionsComponent={Pagination}
            />
          </TableRow>
        </TableFooter>
      );
    }
  }