const initialState = [];
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const RECEIVE_TODO_LIST = 'RECEIVE_TODO_LIST';

export const getTodoList = () => dispatch => fetch('http://localhost:3000/todolist')
	.then(res => res.json())
	.then(json => dispatch({ type: RECEIVE_TODO_LIST, payload: json }))

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
	case RECEIVE_TODO_LIST:
		return action.payload;
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