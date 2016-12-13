// 以下 code 為教學使用
const ADD_COUNT = 'ADD_COUNT';
const SUB_COUNT = 'SUB_COUNT';

export const addCount = () => ({
	type: ADD_COUNT
});

export const subCount = () => ({
	type: SUB_COUNT
});

export default function(state = 0, action) {
	switch(action.type) {
	case ADD_COUNT:
		return state + 1;
	case SUB_COUNT:
		return state - 1;
	default:
		return state;
	}
}

console.log('test');