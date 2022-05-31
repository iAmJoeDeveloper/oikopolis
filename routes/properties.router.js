const express = require('express')

//Services
const propertyService = require('../services/property.service')

const router = express.Router()

const service = new propertyService()

// Get All
router.get('/', (req, res) => {
	const properties = service.getAll()

	res.json({ properties })
})

//Create one
router.post('/', (req, res) => {
	const body = req.body
	const newProperty = service.create(body)

	res.json({
		message: 'Property Created',
		newProperty,
	})
})

//Update Property
router.patch('/:id', (req, res) => {
	const { id } = req.params
	const body = req.body
	const propertyUpdated = service.update(id, body)

	res.json({
		propertyUpdated,
	})
})

//Delete Property
router.delete('/:id', (req, res) => {
	const { id } = req.params
	const propertyDeleted = service.delete(id)

	res.json({
		propertyDeleted,
	})
})

//Find One
router.get('/:id', (req, res) => {
	const { id } = req.params

	const property = service.findOne(id)

	res.json(property)
})

module.exports = router
