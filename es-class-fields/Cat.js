export default class Cat {

	// STATIC:
	static sound = 'meow';

	// PRIVATE:
	#factor = 0.25;

	// PUBLIC:
	weight = 2500 * this.#factor;

	constructor(name) {
		this.name = name;
	}

}
