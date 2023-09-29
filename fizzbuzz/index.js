/**
 * The Problem
 * Write a program that takes one number and print the number.
 * If the number is multiple of 3 print “Fizz” instead of the number.
 * If the number is multiple of 5 print “Buzz” instead of the number.
 * If the number is multiple of both 3 and 5 print “FizzBuzz”.
 */

function fizzBuzz1(num1) {
	if (num1 % 5 === 0 && num1 % 3 === 0) {
		console.log('FizzBuzz')
	} else if (num1 % 5 === 0) {
		console.log('Buzz')
	} else if (num1 % 3 === 0) {
		console.log('Fizz')
	} else {
		console.log(num1)
	}
}

// fizzBuzz1(31)
// fizzBuzz1(30)
// fizzBuzz1(50)
// fizzBuzz1(63)

/**
 * Write a program that prints the numbers from 1 to 100.
 * But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
 * For numbers which are multiples of both three and five print “FizzBuzz”.
 */

function fizzBuzz2() {
	for (let i = 0; i <= 100; i++) {
		if (i % 5 === 0 && i % 3 === 0) {
			console.log('FizzBuzz')
		} else if (i % 5 === 0) {
			console.log('Buzz')
		} else if (i % 3 === 0) {
			console.log('Fizz')
		} else {
			console.log(i)
		}
	}
}

fizzBuzz2()
