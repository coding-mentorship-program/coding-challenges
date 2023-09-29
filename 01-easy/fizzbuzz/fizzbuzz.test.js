const { fizzBuzz1, fizzBuzz2 } = require('./index')

describe('If functions exists ', () => {
	test('fizzbuzz1 function exists', () => {
		expect(fizzBuzz1).toBeDefined()
	})

	test('fizzbuzz2 function exists', () => {
		expect(fizzBuzz2).toBeDefined()
	})
})

describe('if fizzbuzz1 is working', () => {
	it('should work print FizzBuzz with number 15', () => {
		expect(fizzBuzz1(15)).toEqual('FizzBuzz')
	})
	it('should work print FizzBuzz with number 30', () => {
		expect(fizzBuzz1(30)).toEqual('FizzBuzz')
	})
	it('should work print FizzBuzz with number 60', () => {
		expect(fizzBuzz1(10)).toEqual('Buzz')
	})
	it('should work print FizzBuzz with number 15', () => {
		expect(fizzBuzz1(33)).toEqual('Fizz')
	})
	it('should not work 13', () => {
		expect(fizzBuzz1(13)).toEqual(13)
	})
	it('should not work 17', () => {
		expect(fizzBuzz1(17)).toEqual(17)
	})
})
