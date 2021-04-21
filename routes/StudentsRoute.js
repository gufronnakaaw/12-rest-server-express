const express = require('express')
const router = express.Router()
const { StudentsController } = require('../controllers/index')

// get student
router.get('/students', StudentsController.getAll)

// get student by id
router.get('/student/:id', StudentsController.getOne)

// create
router.post('/create', StudentsController.store)

// delete
router.delete('/delete/:id', StudentsController.destroy)

// update
router.put('/update/:id', StudentsController.update)

module.exports = router