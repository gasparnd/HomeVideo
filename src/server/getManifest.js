import fs from 'fs'

const getManifest = () => {
	try {
		return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`))
	} catch(err) {
		console.log(new Error(err))
	}
}

export default getManifest