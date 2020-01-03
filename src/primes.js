class Primes {
	constructor() {
		this.numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23];
	}

	// low must be lower than high. high must be less than the last.
    // highestBetween() makes it ready right.
	fetchHighestBetween(low, high) {
		var highPrime = -1;

		var index = 0;
        while (high >= this.numbers[index]) {
            highPrime = this.numbers[index];
            index++;
        }

        if (highPrime > 1) {
            if (low > highPrime) {
                highPrime = -1;
            }
        }

		return highPrime;
	}

	nextPrime() {
		var top = this.numbers[this.numbers.length - 1] + 1;

		var found = false;

		while (!found) {
			found = true;
			for (var i = 0; (i < this.numbers.length) && (found === true); i++) {
				found = found && ((top % this.numbers[i]) !== 0);
			}

			if (!found) {
				top++;
			}
		}

		this.numbers.push(top);

		return top;
	}

	highestBetween(a, b) {
		var low = a;
		var high = b;

		if (a > b) {
			low = b;
			high = a;
		}

        if (high > this.numbers[this.numbers.length - 1]) {
            while (high > this.nextPrime()) {
            }
        }

		return this.fetchHighestBetween(low, high);
	}

    binaryOperatorNotation() {
        return ":highest_prime:";
    }

    printTest(v1, v2) {
        return ("" + v1 + this.binaryOperatorNotation() + v2 + " = " + this.highestBetween(v1, v2));
    }

	test() {
        console.log(this.printTest(42, -136));
        console.log(this.printTest(1, -136));
        console.log(this.printTest(2, -136));
	}
}

//new Primes().test();

export default Primes;
