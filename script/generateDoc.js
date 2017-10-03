const toMD = require('jsdoc-to-markdown')
const fs = require('fs')
const j = require('berserk')

const writeFileP = j.toPromise(fs.writeFile)
const readFileP = j.toPromise(fs.readFile)

async function main() {
	const apiDoc = await toMD.render({
		files: './index.js',
		'heading-depth': 3
	})
	writeFileP('./doc/api.md', apiDoc)
	const introDoc = await readFileP('./doc/introduction.md')
	return writeFileP('./README.md', introDoc + apiDoc)
}

main()
	.then(
		() => console.log('generate doc success')
	)


