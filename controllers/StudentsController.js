const { StudentModel } = require('../models/index')

class StudentsController {
    async getAll(req, res) {
        try {
            const students = await StudentModel.findAll()

            if(!students){
                res.status(404).json({
                    message: 'not found',
                    data: student
                })
            }

            res.status(200).json({
                message: 'success',
                data: students
            })

        } catch (error) {
            res.status(404).json({
                error
            })
        }
    }

    async getOne(req, res){
        const { id } = req.params
        try {
            const student = await StudentModel.findOne({
                where: {
                    id
                }
            })

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
            
        } catch (error) {
            res.status(404).json({
                error
            })
        }
    }

    async store(req, res){
        const { name, hobby, majors } = req.body

        try {
            
            await StudentModel.create({
                name, hobby, majors
            })

            res.status(201).json({
                message: 'create data success'
            })

        } catch (error) {
            res.status(404).json({
                error
            })
        }
    }

    async destroy(req, res){
        const { id } = req.params
        try {
            
            await StudentModel.destroy({
                where: {
                    id
                }
            })

            res.status(200).json({
                message: 'delete data success'
            })

        } catch (error) {
            res.status(404).json({
                error
            })
        }
    }
    
    async update(req, res){
        const { id } = req.params
        const { name, hobby, majors } = req.body

        try {

            await StudentModel.update(
            {
                name, 
                majors, 
                hobby
            },
            {
                where: {
                    id
                }
            })

            res.status(200).json({
                message: 'update data success'
            })

        } catch (error) {
            res.status(404).json({
                error
            })
        }
    }
}

module.exports = new StudentsController