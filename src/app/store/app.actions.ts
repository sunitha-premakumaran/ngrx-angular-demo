import { Action } from '@ngrx/store';

export class AddTodo implements Action {
    readonly type = 'ADD_TODO';
    payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }
}