import React from 'react';
import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../types/types';
import useActions from './useActions';

export const SET_BOOKS = "SET_BOOKS";
export const SET_LOADING = "SET_LOADING";

type actionType = {
    type: string,
    payload: any
}

export const setBooks = (books: number) => {
    return (dispatch: React.Dispatch<actionType>) => {
        dispatch({
            type: SET_BOOKS,
            payload: books
        })
    }
}

export const loadBooks = (search?: string, page: number = 1, itemsPerPage: number = 3000): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch: React.Dispatch<AnyAction>, getState) => {
    dispatch({
        type: SET_LOADING,
        payload: true
    })
    try {
        const res = await axios.post('/api/books', {
            page: page,
            itemsPerPage: itemsPerPage,
            filters: search ? [{ type: "all", values: [search] }] : []
        })
        const { books, count } = res.data;
        dispatch({
            type: SET_BOOKS,
            payload: {
                books: books,
                count: count
            }
        })
    } catch (err) {
        console.log(err);
    } finally {
        dispatch({
            type: SET_LOADING,
            payload: false
        })
    }
}

export { useActions }