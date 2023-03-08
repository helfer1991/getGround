import React, { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { loadBooks, useActions } from '../../state/actions';
import { Grid } from '@mui/material';
import { SearchBar } from '../search-bar';
import { Table } from '../table';
import { cols } from './utils';
import { useHandleSearch } from '../../hooks/useHandleSearch';

type SearchOptions = {
  searchQuery: string;
  pageQuery: string;
  rowsPerPageQuery: string;
};

type BooksProps = {
  searchOptions: SearchOptions;
  searchCallBack: (searchText: string, page: number, rowsPerPage: number) => void;
};

export const Books: React.FC<BooksProps> = ({ searchOptions, searchCallBack }) => {
  const { books, count, loading } = useSelector(
    (state: RootStateOrAny) => state.repository,
    (prev, next) => prev.loading === next.loading
  );
  const getBooks = useActions(loadBooks);

  const { searchQuery, pageQuery, rowsPerPageQuery } = searchOptions;

  const page = parseInt(pageQuery);
  const rowsPerPage = parseInt(rowsPerPageQuery);

  useEffect(() => {
    getBooks(searchQuery, page, rowsPerPage);
  }, [getBooks, searchQuery, page, rowsPerPage]);

  const handleSearch = useHandleSearch(searchCallBack, searchQuery, rowsPerPage);

  return (
    <Grid container rowSpacing={4} justifyContent="center">
      <Grid item>
        <SearchBar loading={loading} defaultValue={searchQuery} handleSearch={handleSearch} />
      </Grid>
      <Grid item xs={12}>
        <Table
          loading={loading}
          rows={books}
          columns={cols}
          page={page - 1}
          rowsPerPage={rowsPerPage}
          totalRows={count}
          handleChangeOptions={handleSearch}
        />
      </Grid>
    </Grid>
  );
};
