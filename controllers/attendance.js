module.exports = app => {
  app.get('/attendances', (req, res) => {
    return res.json({ msg: 'Attendances GET works!' })
  })
}