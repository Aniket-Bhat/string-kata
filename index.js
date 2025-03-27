const regex = /^[0-9,\-\s]+$|^$/
function stringCalc(str) {
	if (!regex.test(str)) throw Error('String is not properly formatted')
	return str
		.split(',')
		.map(Number)
		.reduce((a, c) => a + c, 0)
}
module.exports = stringCalc
