import { TodoType } from './app.actions';

export interface TodoState {
    todos: string[];
}
const initialState: TodoState = {
    todos: [
        'apple',
        'mongo'
    ]
};

export function todoReducer(state = initialState, action: TodoType) {

    switch (action.type) {
        case 'ADD_TODO': {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        };
        case 'DELETE_TODO': {
            return {
                ...state,
                todos: state.todos.filter((el, index) => {
                    if (index != action.index) {
                        return el;
                    }
                })
            }
        }
        default: {
            return state;
        }

    }

}