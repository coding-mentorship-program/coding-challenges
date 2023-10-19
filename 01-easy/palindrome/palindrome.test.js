// reverseString
test('reverseString function exists', () => {
  expect(reverseString).toBeDefined()
})

test('when passed in a Hello, it should return "olleH"', () => {
  expect(reverseString('Hello')).toEqual('olleH')
})

test('', () => {
  expect(reverseString('Jonathan')).toEqual('nahtanoJ')
})