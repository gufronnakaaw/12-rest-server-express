const express = require('express')
const router = express.Router()
const db = require('../database/database')


// get student
router.get('/students', (req, res) => {
    db.query('SELECT * FROM students', (err, data) => {
        if(err) {
            res.json({
                message: 'cannot get students'
            })

            throw err
        }

        res.json({
            status: 200,
            message: 'success',
            data
        })
    })
})


// get student by id
router.get('/students/:id', (req, res) => {
    db.query('SELECT * FROM students WHERE id = ?', [req.params.id],(err, data) => {
        if(err) {
            res.json({
                message: 'cannot get /student/id'
            })

            throw err
        }

        res.json({
            status: 200,
            message: 'success',
            data
        })
    })
})


// create
router.post('/create', (req, res) => {
    const { name, hobby, majors } = req.body

    const query = `INSERT INTO students (name, majors, hobby) VALUES ('${name}', '${majors}', '${hobby}')`
    db.query(query, (err, data) => {
        if(err) {
            res.json({
                message: 'cannot create data'
            })

            throw err
        }

        if( data.affectedRows > 0 ){
            res.json({
                status: 200,
                message: 'create data successfully'
            })
        }
    })
})


// delete
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id

    db.query(`DELETE FROM students WHERE id = ?`, [id], (err, data) => {
        if(err) {
            res.json({
                message: 'cannot delete data'
            })

            throw err
        }

        if( data.affectedRows > 0 ){
            res.json({
                status: 200,
                message: 'delete successfully'
            })
        }
    })
})


// update
router.put('/update/:id', (req, res) => {
    const { id } = req.params
    const { name, hobby, majors } = req.body
    const data = [name, majors, hobby, id]

    db.query(`UPDATE students SET name = ?, majors = ?, hobby = ? WHERE id = ?`, data, (err, result) => {
        if(err) {
            res.json({
                message: 'cannot delete data'
            })

            throw err
        }

        if( result.affectedRows >= 0 ){
            res.json({
                status: 200,
                message: 'update successfully'
            })
        }
    })
})

module.exports = router