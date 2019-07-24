const Calc = {
	sum(...nums) {
		return [...nums].reduce((a, b) => a + b, 0);
	}
};

export default Calc;
