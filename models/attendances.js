const connection = require('../infrastructure/connection')
const moment = require('moment')

class Attendance {
  addAttendance(attendance, res) {
    const createdAt = moment().format('YYYY-MM-DD HH:MM:SS')
    const scheduling = moment(attendance.scheduling, 'DD/MM/YYYY').format('YYYY-MM-DD')
    const dateService = { ...attendance, createdAt, scheduling }

    const validDate = moment(scheduling).isSameOrAfter(createdAt)
    const validClient = attendance.cliente.length > 4

    const validations = [
      {
        name: 'Cliente',
        valid: validClient,
        message: 'Cliente field must be longer than 5 characters'
      },
      {
        name: 'Date Scheduling',
        valid: validDate,
        message: 'Scheduling field must be longer than created date for scheduling'
      }
    ]

    const errors = validations.filter(field => !field.valid)

    if (errors > 0) {
      res.status(400).json(errors)
    } else {
      const sql = 'INSERT INTO Attendances SET ?'

      connection.query(sql, dateService, (err, result) => {
        if (err) {
          res.status(400).json(err)
        } else {
          res.status(201).json(result);
        }
      })
    }

  }

  findAll(res) {
    const sql = 'SELECT * FROM Attendances'

    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json(error)
      } else {
        res.status(200).json(result)
      }
    })
  }

  findById(id, res) {
    const sql = `SELECT * FROM Attendances WHERE id = ${id}`

    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json(error)
      } else {
        if (result[0] == undefined) {
          res.status(400).json({ msg: 'Object not found' })
        } else {
          console.log(result[0]);
          res.status(200).json(result[0])
        }
      }
    })
  }

  update(id, values, res) {
    const sql = `UPDATE Attendances SET ? WHERE id = ?`

    connection.query(sql, [values, id], (error) => {
      if (error) {
        res.status(400).json(error)
      } else {
        res.status(200).json({ msg: 'Updated syccessfuly' })
      }
    })
  }
}

module.exports = new Attendance