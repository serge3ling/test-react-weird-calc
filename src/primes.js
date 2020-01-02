class Primes {
	constructor() {
		this.numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23];
	}

	// low must be lower than high. high must be less than the last.
	fetchHighestBetween(low, high) {
		//const last = this.numbers[this.numbers.length - 1];
		//var lowPrime = this.numbers[0];
		//var highPrime = this.numbers[last];
		var lowPrimeIndex = 0;
		var highPrime = -1;

		var index = 0;
		while (low >= this.numbers[index]) {
			lowPrimeIndex = index;
			index++;
		}

		if (lowPrimeIndex >= 0) {
			index = lowPrimeIndex;
			while (high >= this.numbers[index]) {
				highPrime = this.numbers[index];
				index++;
			}
		}

		return highPrime;
	}

	highestBetween(a, b) {
		var low = a;
		var high = b;

		if (a > b) {
			low = b;
			high = a;
		}

		return this.fetchHighestBetween(low, high);
	}

	test() {
		console.log("(Primes test) " + this.highestBetween(9, -2));
	}
}

export default Primes;