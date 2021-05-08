module.exports = app => {

  /**
   * GET method
   */
  app.get('/attendances', (req, res) => {
    return res.json({ msg: 'Attendances GET works!' })
  })

  /**
   * POST method
   */
  app.post('/attendances', (req, res) => {
    return res.json({ msg: 'Attendances POST works!' })
  })
}