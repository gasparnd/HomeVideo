import md5 from 'md5'

const gravatar = email => {
	const base = 'https://gravatar.com/avatar/'

	const cleanEmail = email.trim().toLowerCase()

	const hash = md5(cleanEmail, { encoding: "binary" })

	return `${base}${hash}`
}

export default gravatar