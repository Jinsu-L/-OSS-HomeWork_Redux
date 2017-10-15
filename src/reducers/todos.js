const initialState = [{
    text: '할 일 목록 #1',
    completed: false,
    id: 1
}];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':

            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1,
                    completed: false,
                    text: action.text
                }
            ];
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        case 'COMPLETE_TODO':

            return state.map(todo =>
                todo.id === action.id ? Object.assign({}, todo, {completed: !todo.completed}) : todo
            );
        default:
            return state;
    }
}
