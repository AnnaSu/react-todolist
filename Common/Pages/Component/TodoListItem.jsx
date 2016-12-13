import React, { Component } from 'react';
import styles from '../todolist.scss';

export default class TodoListItem extends Component {
	render() {
		const {id, index, name, isComplete, deleteTodoList, toggleTodoList} = this.props;
		let finishStateClass = isComplete ? styles.finish : styles.unfinish;
		let nameClass = isComplete ? styles.finishName : styles.unfinishName;

		return (
			<li className={styles.list}>
				<a
					className={finishStateClass}
					onClick={() => {
						toggleTodoList(id, { name, isComplete: !isComplete });
					}}
				></a>
				<p className={nameClass}>{name}</p>
				<a
					className={styles.del}
					onClick={() => {
						deleteTodoList(id);
					}}
				></a>
			</li>
		);
	}
}
