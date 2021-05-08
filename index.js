const express = require('express')
const consign = require('consign')

const app = express()

// This metho include all controllers into app
consign()
  .include('controllers')
  .into(app)

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
