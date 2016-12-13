import TodoList from '../Component/TodoList.jsx';
import {connect} from 'react-redux';
import {deleteTodoList, toggleTodoList} from '../../Reducers/todolist.js';

export default connect(state => {
	return {todos: state.todolist}
}, {deleteTodoList, toggleTodoList})(TodoList);