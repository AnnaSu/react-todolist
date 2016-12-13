const initialState = [];
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

export function addTodoList (value) {
	return {
		type: ADD_TODO,
		payload: {
			name: value,
			isComplete: false
		}
	}
}

export function deleteTodoList (index) {
	console.log(index)
	return {
		type: DELETE_TODO,
		index
	}
}

export function toggleTodoList (index) {
	return {
		type: TOGGLE_TODO,
		index
	}
}

export default function todolist (state = initialState, action) {
	switch (action.type) {
	case ADD_TODO:
		state.push(action.payload);
		return [...state];
	case DELETE_TODO:
		state.splice(action.index, 1);
		return [...state];
	case TOGGLE_TODO:
		state[action.index].isComplete = !state[action.index].isComplete;
		return [...state];
	default:
		return state;
	}
}