const initialState = [];
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const RECEIVE_TODO_LIST = 'RECEIVE_TODO_LIST';

export const getTodoList = () => dispatch => fetch('http://localhost:3000/todolist')
	.then(res => res.json())
	.then(json => dispatch({ type: RECEIVE_TODO_LIST, payload: json }))

export const addTodoList = (value) => dispatch => fetch('http://localhost:3000/todolist', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: value,
			isComplete: false
		})
	})
	.then(res => res.json())
	.then(json => dispatch({
		type: ADD_TODO,
		payload: json
	}))


export const deleteTodoList = (id) => dispatch => fetch(`http://localhost:3000/todolist/${id}`, {
		method: 'DELETE'
	})
	.then(res => res.json())
	.then(json => dispatch({
		type: DELETE_TODO,
		id
	}));

export const toggleTodoList = (id, todo) => dispatch => fetch(`http://localhost:3000/todolist/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(todo)
	})
	.then(res => res.json())
	.then(json => dispatch({
		type: TOGGLE_TODO,
		...json
	}));

export default function todolist (state = initialState, action) {
	switch (action.type) {
	case RECEIVE_TODO_LIST:
		return action.payload;
	case ADD_TODO:
		state.push(action.payload);
		return [...state];
	case DELETE_TODO:
		return state.filter(item => item.id !== action.id)
	case TOGGLE_TODO:
		return state.map(item => item.id === action.id ? action : item);
	default:
		return state;
	}
}