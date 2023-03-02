import { History } from 'history';
import { RouteChildrenProps } from 'react-router-dom';

export type ViewProps = {
    history: History;
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
};

export type Book = {
    id: number;
    book_pages: number;
    book_publication_city: string;
    book_publication_country: string;
    book_publication_year: number;
    book_title: string;
    book_author: string[];
};

export type RootState = {
    books: Book[];
    count: number;
    loading: boolean;
};