import React, { Component } from 'react';
import Header from '../Component/Header.jsx';
import TodoListContainer from './TodoListContainer.jsx';

export default class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<TodoListContainer />
			</div>
		);
	}
}
