import React, { Component } from 'react';
import TodoListItem from './TodoListItem.jsx';
import styles from '../todolist.scss';

export default class TodoList extends Component {
	render() {
		const {todos, deleteTodoList, toggleTodoList} = this.props;
		return (
			<ul className={styles.content}>
				{
					todos.map((item, index)=>{
						return (
							<TodoListItem
								key={`todolist_${index}`}
								index={index}
								id={item.id}
								name={item.name}
								isComplete={item.isComplete}
								deleteTodoList={deleteTodoList}
								toggleTodoList={toggleTodoList}
							></TodoListItem>
						);
					})
				}
			</ul>
		);
	}
}
