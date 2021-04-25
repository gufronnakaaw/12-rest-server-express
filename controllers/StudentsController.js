const { StudentModel } = require('../models/index')

class StudentsController {
    getAll(req, res) {
        
        StudentModel.findAll()
        .then(students => {

            if(!students){
                res.status(404).json({
                    message: 'Empty',
                    data: students
                })
            }

            res.status(200).json({
                message: 'Success',
                data: students
            })

        })
        .catch(error => {
            res.status(500).json({
                error
            })
        })
 
    }

    getOne(req, res){

        const { id } = req.params
        
        StudentModel.findOne({
            where: { id }
        })
        .then(student => {

            if(!student){
                res.status(404).json({
                    message: 'not found',
                    data: student
                })
            }
    
            res.status(200).json({
                message: 'success',
                data: student
            })

        })
        .catch(error => {
            res.status(500).json({
                error
            })
        })

    }

    store(req, res){

        const { name, hobby, majors } = req.body

        StudentModel.create({
            name, hobby, majors
        })
        .then(() => {
            res.status(201).json({
                message: 'create data success'
            })
        })
        .catch(error => [
            res.status(500).json({
                error
            })
        ])

    }

    destroy(req, res){

        const { id } = req.params

        StudentModel.destroy({
            where: { id }
        })
        .then((result) => {
            console.log(result)
            res.status(200).json({
                message: 'delete data success'
            })
        })
        .catch(error => {
            res.status(500).json({
                error
            })
        })
        
    }
    
    update(req, res){

        const { id } = req.params
        const { name, hobby, majors } = req.body

        StudentModel.update({
            name, 
            majors, 
            hobby
        },{
            where: { id }
        })
        .then(() => {
            res.status(200).json({
                message: 'update data success'
            })
        })
        .catch(error => {
            res.status(500).json({
                error
            })
        })

    }
}

module.exports = new StudentsController