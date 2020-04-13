import { Action } from '@ngrx/store';

export class AddTodo implements Action {
    readonly type = 'ADDED_TODO';
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


export class PostTodo  implements Action {
    readonly type = 'POST_TODO';
    payload:string;

    constructor(payload:string){
        this.payload = payload;
    }
}

export type TodoType = AddTodo | DeleteTodo | PostTodo;