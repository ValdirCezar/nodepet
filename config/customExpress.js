module.exports = () => {
  const express = require('express')
  const consign = require('consign')

  const app = express()

  // This metho include all controllers into app
  consign()
    .include('controllers')
    .into(app)

    return app
}