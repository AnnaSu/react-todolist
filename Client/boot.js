import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import createStore from '../Common/Store/'
import createRoutes from '../Common/Router';


const store = createStore();
const routes = createRoutes(store);

ReactDOM.render(
<Provider store={ store }>
	<Router history={ browserHistory }>
        { routes }
    </Router>
</Provider>, document.getElementById('root'))

// 以下 code 為教學使用
/*
import React from 'react';
import { createStore } from 'redux';

const action = {
	type: 'ADD'
}

function add () {
	return {
		type: 'ADD'
	}
}

function counter (state = 0, action) {
	switch (action.type) {
	case 'ADD':
	    return state + 1;
	default:
	    return state;
	}
}

const store = createStore(counter);

console.log('store:', store);
// getState
// dispatch
// subscribe

console.log('state:', store.getState());

store.dispatch(action);

console.log('after state:', store.getState());

const render = () => {
  document.body.innerText = store.getState();
};

// // 傳入一個 callback function，當 dispatch()執行完之後，就會自動執行這個 callback function
store.subscribe(render);
render();//初次render，印出 0

// // 只能透過 store.diapatch 改變 state
// // 點擊一次， state 都 ＋1
document.addEventListener('click', () => {
  store.dispatch(action);
});
*/



