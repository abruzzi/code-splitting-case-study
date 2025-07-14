const titlify = (str) => str
	.split(/\s+/)
	.map(w => w[0].toUpperCase() + w.substring(1, w.length))
	.join(' ')

const formatTitle = (str) => `Title ｜ ${titlify(str)}`

export { titlify, formatTitle }