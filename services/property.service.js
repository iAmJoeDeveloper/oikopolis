const faker = require('faker')

class propertyService {
	constructor() {
		this.properties = []
		this.generate()
	}

	generate() {
		for (let i = 0; i < 10; i++) {
			this.properties.push({
				id: faker.datatype.uuid(),
				name: faker.name.findName(),
				address: faker.address.city(),
				price: faker.commerce.price(45000, 500000, 2, '$'),
			})
		}
	}

	create(data) {
		const newProperty = {
			id: faker.datatype.uuid(),
			...data,
		}

		this.properties.push(newProperty)

		return newProperty
	}

	getAll() {
		return this.properties
	}

	findOne(id) {
		return this.properties.find((item) => item.id === id)
	}

	update(id, data) {
		//No usamos find() porque no solo necesitamos saber si esta o no, tambien necesitamos saber la posición para eso existe findIndex()
		const index = this.properties.findIndex((item) => item.id === id)
		const property = this.properties[index]

		if (index === -1) {
			throw new Error('The property does not exist')
		} else {
			this.properties[index] = {
				...property,
				...data,
			}
		}

		return this.properties[index]
	}

	delete(id) {
		const index = this.properties.findIndex((item) => item.id === id)

		if (index === -1) {
			throw new Error('That property does not exist')
		} else {
			this.properties.splice(index, 1)

			return {
				message: `Property ${index} was deleted`,
			}
		}
	}
}

module.exports = propertyService
