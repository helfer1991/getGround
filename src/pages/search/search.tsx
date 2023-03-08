import React, { useCallback } from 'react'
import type { ViewProps } from '../../types/types';
import { Books} from '../../components/books';
import { useQuery } from '../../hooks/useQuery';
import { Container } from './styles';

export const Search: React.FC<ViewProps> = ({ history }) => {
    const query = useQuery();
    const searchQuery = query.get('s') || '';
    const pageQuery = query.get('p') || '1';
    const rowsPerPageQuery = query.get('r') || '20';

    const handleSearch = useCallback((
        searchText: string,
        page: number,
        rowsPerPage: number
    ) => {
        history.push(`/search?s=${searchText}&p=${page}&r=${rowsPerPage}`)
    }, [history])

    return (
        <section>
            <Container>
                <Books
                    searchOptions={{
                        searchQuery: searchQuery,
                        pageQuery: pageQuery,
                        rowsPerPageQuery: rowsPerPageQuery
                    }}
                    searchCallBack={handleSearch}
                />
            </Container>
        </section>
    )
}