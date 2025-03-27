const regex = /^[0-9,\-\s]+$|^$/
const splitRegex = /[\n,]/

function stringCalc(str) {
	if (!regex.test(str)) throw Error('String is not properly formatted')
	return str
		.split(splitRegex)
		.map(Number)
		.reduce((a, c) => a + c, 0)
}
module.exports = stringCalc
