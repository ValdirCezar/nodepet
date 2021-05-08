const express = require('express')

const app = express()

app.listen(3000, () => console.log('Server running on http://localhost:3000'))

app.get('/', (req, res) => {
  return res.json({ msg: 'Request GET works!' })
})