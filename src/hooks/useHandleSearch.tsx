import { useCallback } from 'react';

type SearchCallback = (searchText: string, page: number, rowsPerPage: number) => void;

type HandleSearchHook = (
  searchCallback: SearchCallback,
  searchQuery: string,
  rowsPerPage: number
) => (type: 'search' | 'page' | 'rowsPerPage', newValue: string) => void;

export const useHandleSearch: HandleSearchHook = (
  searchCallback,
  searchQuery,
  rowsPerPage
) => {
  const handleSearch = useCallback(
    (type: 'search' | 'page' | 'rowsPerPage', newValue: string) => {
      switch (type) {
        case 'search':
          return searchCallback(newValue, 1, rowsPerPage);
        case 'page':
          return searchCallback(searchQuery, parseInt(newValue), rowsPerPage);
        case 'rowsPerPage':
          return searchCallback(searchQuery, 1, parseInt(newValue));
        default:
          return null;
      }
    },
    [searchCallback, searchQuery, rowsPerPage]
  );

  return handleSearch;
};
