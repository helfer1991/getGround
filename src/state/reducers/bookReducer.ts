import { RootState } from '../../types/types';
import { SET_BOOKS, SET_LOADING } from "../actions";

type actionType = {
    type: string,
    payload: any
}

const initialState: RootState = {
    books: [],
    count: 0,
    loading: false
}

export const bookReducer = (state: RootState = initialState, action: actionType) => {
    switch (action.type) {
        case SET_BOOKS:
            const { books, count } = action.payload
            return { ...state, books: books, count: count }
        case SET_LOADING:
            return { ...state, loading: action.payload }
        default:
            return state
    }
}