import React, {Component} from 'react';
import {addTodoList} from '../../Reducers/todolist.js';
import {connect} from 'react-redux';
import styles from '../Header.scss';

class Header extends Component {
	constructor (props) {
		super(props);
		this.state = {
			value: ''
		}
	}

	render () {
		const {unfinished, addTodoList} = this.props;
		return (
			<div>
				<header className={styles.header}>
					<img
						className={styles.logo}
						src={require('../../images/logo_todo.png')}
						alt=""
					/>
					<div className={styles.unfinish}>
						<span className={styles.count}>{unfinished}</span>
						個未完成
					</div>
				</header>
				<div className={styles.inputContent}>
					<img
						className={styles.add}
						src={require('../../images/ic_add.png')}
						alt=""
					/>
					<input
						className={styles.input}
						placeholder="What need to be done?"
						onChange={
							(event) => {
								this.setState({
									value: event.target.value
								});
							}
						}
						value={this.state.value}
						type="text"
						onKeyDown={
							(event) => {
								if (13 === event.keyCode) {
									addTodoList(this.state.value);
									this.setState({value: ''});
								}
							}
						}
					/>
				</div>
			</div>
		);
	}
}


export default connect(state => ({
	unfinished: state.todolist.filter(item => !item.isComplete).length
}), {
	addTodoList
})(Header);
