// tslint:disable:object-literal-sort-keys
// tslint:disable:ordered-imports
import DefaultReducer from '@reducers/default-reducer';
import PageLoginReducer from '@reducers/page-login-reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  DefaultReducer,
  PageLoginReducer,
});
export const store = createStore(reducers, applyMiddleware(thunk));

export default store;
