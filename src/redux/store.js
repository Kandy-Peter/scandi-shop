import { createStore } from 'redux';
import { reducer } from './currency/reducer';

export const store = createStore(reducer);