import Framework from './Framework';

export function component(name) {
	return function (target) {
		Framework.add('component', name, target);
	};
};

export function directive(name) {
	return function (target) {
		Framework.add('directive', name, target);
	};
};
