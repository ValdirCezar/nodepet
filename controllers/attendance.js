const Attendance = require('../models/attendances')

module.exports = app => {

  /**
   * GET All method
   */
  app.get('/attendances', (req, res) => {
    Attendance.findAll(res)
  })

  /**
   * GET by id method
   */
   app.get('/attendances/:id', (req, res) => {
     const id = parseInt(req.params.id)
    Attendance.findById(req.params.id, res)
  })

  /**
   * POST method
   */
  app.post('/attendances', (req, res) => {
    const attendance = Attendance.addAttendance(req.body, res)
  })

  /**
   * PATCH method
   */
  app.patch('/attendances/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const values = req.body

    Attendance.update(id, values, res)
  })
}