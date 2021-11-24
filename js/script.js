let adder = function () {
	let res = [];
	function foo() {
		if (res.length === 100) {
			return;
		}
		let x = Math.floor((Math.random() * 100) + 1);
		for (let i = 0; i < res.length; i++) {
			if (x === res[i]) return foo();
		}

		res.push(x);
		return res;
	}
	return foo;
};

let result = adder();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
