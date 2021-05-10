const connection = require('../infrastructure/connection')
const moment = require('moment')

class Attendance {
  addAttendance(attendance) {
    const createdAt = moment().format('YYYY-MM-DD HH:MM:SS')
    const scheduling = moment(attendance.scheduling, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
    const dateService = { ...attendance, createdAt, scheduling }

    const sql = 'INSERT INTO Attendances SET ?'

    connection.query(sql, dateService, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log(res);
      }
    })
  }
}

module.exports = new Attendance