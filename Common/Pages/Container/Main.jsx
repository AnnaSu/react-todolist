import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Component/Header.jsx';
import TodoListContainer from './TodoListContainer.jsx';
import { getTodoList } from '../../Reducers/todolist.js';

class Main extends Component {
	componentDidMount() {
		const { getTodoList } = this.props;
		getTodoList();
	}
	
	render() {
		return (
			<div>
				<Header />
				<TodoListContainer />
			</div>
		);
	}
}

export default connect(null, { getTodoList })(Main)