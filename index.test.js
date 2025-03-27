const stringCalc = require('./index')

test('should add numbers in the string', () => {
	expect(stringCalc('')).toBe(0)
	expect(stringCalc('1,2,3')).toBe(6)
	expect(stringCalc('1,4')).toBe(5)
	expect(stringCalc('-1,4')).toBe(3)
	expect(stringCalc(' 1 , 2 , 3 ')).toBe(6)
	expect(stringCalc(' 1 , 2 , 3, ')).toBe(6)
})

test('should handle error when string contains non-numeric values', () => {
	expect(() => stringCalc('1,2,apple')).toThrow(
		'String is not properly formatted'
	)
	expect(() => stringCalc('a,b,c')).toThrow('String is not properly formatted')
	expect(() => stringCalc('1;2;3')).toThrow('String is not properly formatted')
})
