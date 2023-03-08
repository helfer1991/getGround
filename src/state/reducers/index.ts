import { combineReducers } from 'redux';
import { bookReducer } from './bookReducer';

const reducers = combineReducers({
    repository: bookReducer
})

export default reducers