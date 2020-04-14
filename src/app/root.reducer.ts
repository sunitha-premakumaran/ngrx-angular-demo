import {
    TodoState,
    todoReducer
} from './store';
import { ActionReducerMap } from '@ngrx/store';

export interface RootState {
    todoList: TodoState;
}

/**
 * Global Action/State Reducer
 * Enables typing while selecting state
 */
export const actionReducer: ActionReducerMap<RootState> = {
    todoList: todoReducer
}