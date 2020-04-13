import { Action } from '@ngrx/store';

export class AddTodo implements Action {
    readonly type = 'ADD_TODO';
    payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }
}

export class DeleteTodo implements Action {

    readonly type = 'DELETE_TODO';
    index: number;

    constructor(index: number) {
        this.index = index;
    }
}

export type TodoType = AddTodo | DeleteTodo;