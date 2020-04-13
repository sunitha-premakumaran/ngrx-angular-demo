import { TodoType } from './app.actions';

export interface TodoState {
    todos: string[];
    loading?: boolean;
}
const initialState: TodoState = {
    todos: [
        'apple',
        'mongo'
    ]
};

export function todoReducer(state = initialState, action: TodoType) {

    switch (action.type) {
        case 'ADDED_TODO': {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        };
        case 'POST_TODO': {
            return {
                ...state,
                loading: true
            };
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

        // On Init of store, this is fired and all the actions reaches all the reducers in
        default: {
            return state;
        }

    }

}