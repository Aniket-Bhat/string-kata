function stringCalc(str) {
	const specialDelimiter = new RegExp('^([^0-9])\\n')
	const delimiterCheck = str.match(specialDelimiter)
	const delimiter = delimiterCheck ? delimiterCheck[0] : ','

	const validString = new RegExp(`^[0-9${delimiter}\\n\\-\\s]+$|^$`)
	if (!validString.test(str)) throw Error('String is not properly formatted')
	const splitRegex = new RegExp(`[${delimiter}\\n]`)

	const numbers = str.split(splitRegex).map(Number)

	if (numbers.some((v) => v < 0)) {
		const negativeNumbers = numbers.filter((v) => v < 0)
		throw Error(`Negative numbers not allowed: ${negativeNumbers}`)
	}
	return numbers.reduce((a, c) => a + c, 0)
}

module.exports = stringCalc
