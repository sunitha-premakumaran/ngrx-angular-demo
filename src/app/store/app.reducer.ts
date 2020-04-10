import { AddTodo } from './app.actions';

const initialState = {
    todos: [
        'apple',
        'mongo'
    ]
};

export function todoReducer(state = initialState, action: AddTodo) {

    switch (action.type) {
        case 'ADD_TODO': {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        }
        default: {
            return state;
        }

    }

}