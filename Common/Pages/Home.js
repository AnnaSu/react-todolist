import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './Container/Main.jsx';
import styles from './Home.scss';

class Home extends Component {
	render() {
		return (
			<div>
				<Main />
			</div>
		);
	}
}

export default (Home);
