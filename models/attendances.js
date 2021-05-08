const connection = require('../infrastructure/connection')

class Attendance {
  addAttendance(attendance) {
    const sql = 'INSERT INTO Attendances SET ?'

    connection.query(sql, attendance, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log(res);
      }
    })
  }
}

module.exports = new Attendance